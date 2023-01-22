const router = require('express').Router();
const { getById, attachAccessory } = require('../services/cubeService')
const { getAll } = require('../services/accessorySevice')

router.get('/:id', async (req, res) => {
    const cube = await getById(req.params.id);
    // console.log('detailsController - get/:id');
    // console.log(cube);
    res.render('details', {
        cube
    })
});


router.get('/:id/attach', async (req, res) => {

    const cube = await getById(req.params.id);
    const accessories = await getAll()

    // Check if accessory is already attached to the cube
    let notAttached = [];
    let alreadyAttached = [];
    if (cube.accessories) {
        cube.accessories.map(a => alreadyAttached.push(a._id.toString()))
        accessories.map(a => {
            if (!alreadyAttached.includes(a._id.toString())) {
                notAttached.push(a)
            }
        });
    } else {
        notAttached = accessories
    }
    res.render('attachAccessory', {
        cube,
        notAttached
    })

});

router.post('/:id/attach', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id
    res.redirect(`/details/${cubeId}`)
    //id - this is cube ID

    await attachAccessory(cubeId, accessoryId)
})

module.exports = router
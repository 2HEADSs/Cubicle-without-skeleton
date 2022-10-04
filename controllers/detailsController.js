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
    let notAttached = [];
    let alreadyAttached = [];

    for (let accessory of cube.accessories) {
        alreadyAttached.push(accessory._id.toString())
    };


    for (let accessory of accessories) {
        if (!alreadyAttached.includes(accessory._id.toString())) {
            notAttached.push(accessory)
        }
    }
    console.log(notAttached);
    console.log('<--------------------->');
    // console.log(accessories);
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
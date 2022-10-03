const router = require('express').Router();
const { getById, attachAccessory } = require('../services/cubeService')
const { getAll } = require('../services/accessorySevice')

router.get('/:id', async (req, res) => {
    const cube = await getById(req.params.id);
    res.render('details', {
        cube
    })
});


router.get('/:id/attach', async (req, res) => {

    const cube = await getById(req.params.id);
    const accessories = await getAll()
    res.render('attachAccessory', {
        cube,
        accessories
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
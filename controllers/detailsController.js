const router = require('express').Router();
const { getById } = require('../services/cubeService')
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

module.exports = router
const router = require('express').Router();
const { getById } = require('../services/cubeService')

router.get('/:id', async(req, res) => {
    const cube = await getById(req.params.id);
    res.render('details', {
        cube
    })
});


router.get('/:id/attach', async(req, res) => {
    console.log(req.params.id);
    const cube = await getById(req.params.id);
    res.render('attachAccessory', {
        cube
    })
});

module.exports = router
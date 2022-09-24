const router = require('express').Router();
const { getById } = require('../services/dataService')

router.get('/:id', (req, res) => {
    const cube = getById(req.params.id);
    console.log(cube);
    res.render('details', {
        cube
    })
});


module.exports = router
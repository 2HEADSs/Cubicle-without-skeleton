const router = require('express').Router();
const { getAll } = require('../services/cubeService')

router.get('/', async (req, res) => {
    const search = req.query.search;
    const from = req.query.from;
    const to = req.query.to;
    const cubes = await getAll(search, from, to);
    
    res.render('index', {
        search,
        from,
        to,
        cubes,
    })
});



module.exports = router
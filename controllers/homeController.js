const router = require('express').Router();
const { getAll } = require('../services/dataService')

router.get('/', (req, res) => {
    const search = req.query.search;
    const from = req.query.from;
    const to = req.query.to;
    const cubes = getAll(search, from, to);

    res.render('index', {
        search,
        from,
        to,
        cubes,
    })
});



module.exports = router
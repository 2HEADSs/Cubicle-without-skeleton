const { create } = require('../services/dataService');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create')
});

router.post('/', async (req, res) => {
    try {
        const result = await create(req.body)

        console.log(result);
        res.redirect('/details/' + result.id)
    } catch (err) {
        console.log(err);
    }
})


module.exports = router
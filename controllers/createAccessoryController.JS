const { create } = require('../services/accessorySevice');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('createAccesory')
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const result = await create(req.body)

        // console.log(result);
        // res.redirect('/details/' + result.id)
        // res.redirect('/details/' + result.id)
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
})


module.exports = router
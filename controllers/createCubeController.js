const { create } = require('../services/cubeService');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('createCube')
});

router.post('/', async (req, res) => {
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
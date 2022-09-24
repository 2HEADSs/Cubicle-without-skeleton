const router = require('express').Router();


router.get('/', (req, res)=>{
    res.render('create')
});


module.exports = router
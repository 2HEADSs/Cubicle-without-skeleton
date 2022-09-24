const router = require('express').Router();
const {getAll} = require('../services/dataService')

const cubes = getAll()
router.get('/', (req, res)=>{
    res.render('index',{
        cubes
    })
});



module.exports = router
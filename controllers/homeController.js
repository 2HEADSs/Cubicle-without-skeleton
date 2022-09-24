const router = require('express').Router();
const {getAll} = require('../services/dataService')

const cubes = getAll()
router.get('/', (req, res)=>{
    console.log(cubes);
    res.render('index',{
        cubes
    })
});



module.exports = router
var express = require('express');
var router = express.Router();
const pool= require('../utils/bd');
const mail = require('./../mail');
router.get('/', async (req,res,next)=>{
   
        res.render('perfiladmin');
    

    
    

})


module.exports=router;
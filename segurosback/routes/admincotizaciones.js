const express = require('express');
const router = express.Router();
const service = require('./../models/cotiza');

const todasConsutlas = async(req,res) =>{
   
   try{
    let result =  await service.TodasCotizaciones();
    res.json({result});

   }catch(error){
       console.log(error)
       res.sendStatus(500);
   }
   
}

router.get('/', todasConsutlas);


module.exports=router;
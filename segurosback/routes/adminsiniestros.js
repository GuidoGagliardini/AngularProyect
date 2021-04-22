const express = require('express');

const router = express.Router();
const service = require('./../models/siniestros');


const todos = async (req,res, next)=>{
    try{
        let result = await service.adminSiniestros();
        res.json({siniestros: result});

    }catch(eror){
        console.log(error);
        res.sendStatus(500);
    }
}
const detallesiniestro = async (req,res) =>{
    try{
        const id = req.params.id;
        let result = await service.detallesiniestro(id);
        console.log(result);
        res.json({siniestro:result});

    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

router.get('/',todos);
router.get('/:id', detallesiniestro);

module.exports=router;



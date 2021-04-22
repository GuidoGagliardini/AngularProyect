const express = require('express');
const router =  express.Router();
const service  = require ('./../models/auth');

const verify  = async (req,res,next) =>{
    try{
        const result =  await service.verifyUser(req.params.verify_code);
        let activated = result[0].activated;
        const obj  = {activated : 1};

        if (activated != 1){
             await service.updateActivatedUser(result[0].id_u, obj.activated);
             res.json({status: true});
            
        }else {
            res.json({messege:"usuario ya activado",activated});
            console.log('Ususario ya activado');
        }



    }catch(error){
        res.sendStatus(500);

    }
}
router.get('/:verify_code', verify);


module.exports= router;
const express = require('express');
const router = express.Router();
const service = require('../models/auth');

const jwt = require('jsonwebtoken');
const fs = require('fs');

const auth  = async (req,res)=>{
try{
    const {usuario,password} = req.body;
    
    const result = await service.auth(usuario,password);
    console.log('este arra esta vacio', result);
    
    
    if (result.length){
       
        
        
        let signOptions = {
            expiresIn : "6h",
            algorithm : "RS256"
        }
        const {usuario_u, id_u , permisos_u} = result [0]
        const payload = {usuario_u, id_u, permisos_u};
        console.log('id permiso : ' ,  permisos_u);
        console.log('payload : ', payload)
        
        const privateKey = fs.readFileSync('./utils/keys/private.pem', 'utf8');
        const token = jwt.sign(payload,privateKey,signOptions);
        res.status(200).json({id:id_u, permiso: permisos_u, usuario: usuario_u, JWT : token});
        

    }else {
        res.json({messege: 'NO AUTORIZADO'})
    }
    
  
        
    }catch (error){
        res.json({messege: 'error aca'});
        console.log(error);
    }}
router.post("/", auth);
// router.get("/", auth);
module.exports = router;
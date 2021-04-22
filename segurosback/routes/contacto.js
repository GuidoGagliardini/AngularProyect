const express = require ('express');
const router = express.Router();
const contactoservice =  require ('./../models/contacto');


const carga  = async (req,res)=>{
try{
let obj =  {
    nombre_contacto : req.body.nombre_contacto,
    email_contacto : req.body.email_contacto,
    telefono_contacto : req.body.telefono_contacto,
    consulta_contacto : req.body.consulta_contacto
}
console.log(obj);
let result = await contactoservice.cargacontacto(obj); 
//esto me devuelve el ultimo ID asique sabemos que numero de consulta es
res.json ({consultaNumero : result});   
} 
catch (error){
    console.log(error)
    res.sendStatus(500);

}   
}



const todasconsultasAdmin  = async (req,res)=>{
    try{
    let result = await contactoservice.todascontacto();
    
    res.json ({result});
    }catch (error){
        console.log(error)
        res.sendStatus(500);
    }
    }

const borrarConsulta  = async (req,res)=>{
        try{
        const {id} = req.params;
        const result = await contactoservice.deletecontacto(id);
        res.json ({result});
        }catch (error){
            console.log(error)
            res.sendStatus(500);
        }
        }

router.get('/consultasAdmin', todasconsultasAdmin);
router.delete('/delete/:id', borrarConsulta);
router.post('/', carga);

module.exports = router;
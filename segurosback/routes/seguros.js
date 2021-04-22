const express = require ('express');
const router = express.Router();
const serviceSeguros =  require ('./../models/seguros');


const todos  = async (req,res)=>{
try{
    let result = await serviceSeguros.segurosall();
    res.json ({seguros : result});
    
}catch (error){
    console.log(error)
    res.sendStatus(500);

}
}
const seguroSingle= async (req,res) =>{
   try{
       let result = await serviceSeguros.seguroSingle(req.params.id);
       
       res.json({segurosingle: result});

   } catch(error){
       console.log(error);
       res.sendStatus(500);
   }

}



router.get('/', todos);
router.get('/seguros-single/:id', seguroSingle);
module.exports = router;

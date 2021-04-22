const express = require('express');
const router = express.Router();
const service = require ('./../models/admin/users');
const uuid = require ('uuid');
const mailService = require ('./../mail');

const todosUsuarios = async (req,res) =>{
  try{
    let result  =  await service.getUsers();
    res.json({usuarios: result})

  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
const editUsers = async (req,res,next)=>{
try{ 
  
  const {permisos,usuario,password,email} = req.body;
 
  
  console.log(req.body);
  if (permisos){
    const result = await service.editUsers([usuario,password,email],permisos);

    res.json({status: true, messegue:"UPDATE OK"});
  }else{
    console.log('error');
  }
  
}catch(error){
  console.log(error);
  res.sendStatus(500);
}
}
const createUsers = async (req,res,next)=>{
  try{
    const {usuario,email,repeatPassword,password} = req.body;
    const verifyExistentUser = await service.verifyExistentUser(email);
    console.log(verifyExistentUser)
    if (verifyExistentUser.length){
      res.json(false)
    }else{
      const obj = {
        usuario_u : usuario,
        email_u: email,
        password_u: password,
  
        permisos_u: "1",
        verify_code: uuid(),
        activated:"0",
        available:"1"
      }
      
      if(password==repeatPassword){
        let result = await service.createUsers(obj);
          if (result) {
            const verifyTemplate = `
            <html>
                      <body>
                          <h4>CODIGO DE VERIFICACION => ${obj.verify_code}</h4>
                          <h4>LINK DE ACTIVACION=> <a href="${process.env.URL_SERVER_FRONT}/verify/${obj.verify_code}">here</a></h4>
                      </body>
                  </html>
            `;
            let mailVerify = mailService.verifyUser(email, verifyTemplate);
            console.log('Verificacion de usuario enviada');
          }  else {console.log('Error en la verficacion')};
         
        console.log('operacionRealizada');
        res.json({messege:"OK"});
      }
    } 
    
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
const deleteUsers = async (req,res,next)=>{
  try{
    const {id}= req.params;
    const result = await service.deleteUser(id);
    res.json({result});
  }catch{
    console.log(error)
    res.sendStatus(500);
  }

}
router.get('/', todosUsuarios);
router.post('/',createUsers);
router.put('/edit', editUsers);
router.delete('/:id', deleteUsers);
module.exports = router;

const knex = require ('./../../utils/bd');


const getUsers = async ()=>{
    return consulta = await knex(process.env.T_USERS)
                                .select('*');
}



const editUsers = async (permisos,[usuario,password,email])=>{
  try{

      return consulta = await knex(process.env.T_USERS)
                   
                    .where('permisos_u',permisos)
                    .update('usuario_u,password_u,email_u', [usuario,password,email])
  } catch(error){
      throw error;
  }
                                
}


const createUsers = async (obj)=>{
    try{
  
        return consulta = await knex(process.env.T_USERS)
                                    .insert(obj);
                     
    } catch(error){
        throw error;
    }
} 
const deleteUser = async (id)=>{
    try{
        return consulta = await knex(process.env.T_USERS)
                                    .where('id_u',id)
                                    .del();
    }catch{

    }
} 
const verifyExistentUser = async (email) =>{
    try {
        return knex(process.env.T_USERS)
                    .where(`email_u`,email)
                    .select(`email_u`)
    } catch (error) {
        throw error;
    }
}
module.exports= {
    getUsers,
    editUsers,
    createUsers,
    deleteUser,
    verifyExistentUser
}
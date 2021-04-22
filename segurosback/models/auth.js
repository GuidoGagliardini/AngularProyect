const knex = require ('./../utils/bd');

const auth  = async  (usuario, password) =>{
    
      return consulta = await knex(process.env.T_USERS)
                            .select('id_u', 'usuario_u','password_u','permisos_u')
                            .where ('usuario_u', usuario).andWhere('password_u', password)
                            .andWhere('activated',1)
                            .andWhere('available',1)
                            
                        
}
const getIdByuser = async(email) =>{
    try{

        return knex (process.env.T_USERS)
                    .select(`${process.env.T_USERS}.id_u`)
                    .where(`${process.env.T_USERS}.email_u`,email);
    }catch(error){
        throw(error);
       
    }
}
const updateUser = async(id,password) =>{
    try{

        return knex (process.env.T_USERS)
                    .where(`${process.env.T_USERS}.id_u`,id)
                    .update(`${process.env.T_USERS}.password_u`, password);
    }catch(error){
        throw(error);
       
    }
}
const updateActivatedUser = async(id,activated) =>{
    try{

        return knex (process.env.T_USERS)
                    .where(`${process.env.T_USERS}.id_u`,id)
                    .update(`${process.env.T_USERS}.activated`, activated);
    }catch(error){
        throw(error);
       
    }
}
const verifyUser = async (verify_code) => {
    try{
        return knex (process.env.T_USERS)
                        .where(`verify_code`, verify_code)
                        .select(`id_u`,`activated`);
    }catch (error){
        throw error;
    }
}





module.exports = {
    auth,
    getIdByuser,
    updateUser,
    updateActivatedUser,
    verifyUser
}
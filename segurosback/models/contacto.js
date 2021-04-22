const knex = require ('./../utils/bd');




const cargacontacto  = async  (obj) =>{
    
      return consulta = await knex(process.env.T_CONTACTO)
                            .insert(obj);
                  
}
const todascontacto  = async  () =>{
    
    return consulta = await knex(process.env.T_CONTACTO)
                          .select('*');
                
}
const deletecontacto = async(id)=>{
    return consulta = await knex(process.env.T_CONTACTO)
                            .where('id_contacto', id)
                            .del();
                            
}

module.exports = {
    cargacontacto,
    todascontacto,
    deletecontacto
}
const knex = require ('./../utils/bd');




const segurosall  = async  () =>{
    
      return consulta = await knex(process.env.T_SEGUROS)
                              .select('*');
                  
}

const seguroSingle = async (id) => {
    return consulta  = await knex(process.env.T_SEGUROS)
                             .select('id_s','nombre_s','titulo','descripcion','imagen').where('id_s', id); 
                             //aca tendria que agregar tablas a la base para la parte Single
}




module.exports = {
    segurosall,
    seguroSingle
}
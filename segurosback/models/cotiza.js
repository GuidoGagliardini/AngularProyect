const { as } = require('./../utils/bd');
const knex = require ('./../utils/bd');




const CargaCotizacion  = async  (obj) =>{
    
      return consulta = await knex(process.env.T_COTIZACION)
                              .insert(obj);
                  
}
const TodasCotizaciones = async (obj)=>{
    return consulta = await knex(process.env.T_COTIZACION)  
                                .select('*');
}


module.exports = {
    CargaCotizacion,
    TodasCotizaciones
}
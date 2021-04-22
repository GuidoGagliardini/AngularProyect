const { where } = require('./../utils/bd');
const knex = require('./../utils/bd');

//carga de datos e imagen a la base de datos
const CargaSiniestro  = async  (obj) =>{
    
      return consulta = await knex(process.env.T_SINIESTROS)
                             .insert(obj);
                  
}
const adminSiniestros = async () =>{
    return consulta = await knex(process.env.T_SINIESTROS)
                            .select('id_sin', 'asegurado_sin','patente_sin');
}
const detallesiniestro = async(id) =>{
    return consulta = await knex(process.env.T_SINIESTROS)
                                .select('id_sin','fecha_sin','hora_sin','calle_sin','entrecalle_sin','entrecalle2_sin',
                                'localidad_sin','formaocurrencia_sin','danos_sin','asegurado_sin',
                                'patente_sin','nombretercero_sin','dnitercero_sin','autotercero_sin','segurotercero_sin','danotercero_sin')
                                .where('id_sin',  id);
                               
                               

}
module.exports = {
    CargaSiniestro,
    adminSiniestros,
    detallesiniestro
};

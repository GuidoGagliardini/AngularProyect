var express = require('express');
var router = express.Router();
const mail = require('./../mail');
const multer = require ('multer');
const config = { dest: "./public/tmp" };
const upload = multer(config);// todos los archivos temporales que suba el usuario genera la carpeta UPLOADS
const uuid = require ('uuid');// para generar ids unicos.
const fs = require('fs'); // no se descarga viene propio de node, para copiar y pegar. nos permite manejar archivos del sistema
const service = require ('./../models/siniestros');
const imageHandler =  require ('../utils/imageHandler');


errorHandler = (error, res) => {
    console.error(error); // logs
    return res.json({ error: "Error en la consulta" });
  };



const add  =  (req,res,next) =>{
 try{
    let name  = imageHandler.saveImage(req.file);
   console.log(name)
    const {
        fecha_sin,
        hora_sin,
        calle_sin ,
        entrecalle_sin,
        entrecalle2_sin,
        localidad_sin,
        formaocurrencia_sin,
        danos_sin,
        asegurado_sin,
        patente_sin,
        nombretercero_sin,
        dnitercero_sin,
        autotercero_sin,
        segurotercero_sin,
        danotercero_sin
        } = req.body;

        const data = {
            fecha_sin,
        hora_sin,
        calle_sin ,
        entrecalle_sin,
        entrecalle2_sin,
        localidad_sin,
        formaocurrencia_sin,
        danos_sin,
        asegurado_sin,
        patente_sin,
        nombretercero_sin,
        dnitercero_sin,
        autotercero_sin,
        segurotercero_sin,
        danotercero_sin,
        imagen_sin : name
        }

       
        

    const result = service.CargaSiniestro(data);
    if(result){
        res.json({result});
        console.log('Carga de imagen y datos correctas');
    }else {
        res.json({messege:"Error en la consulta de imagen"});
    }
 }catch(error){
        console.log(error);
        res.sendStatus(500);
 }

 
};

router.post ('/',upload.single('imagen_sin'), add);

module.exports = router;
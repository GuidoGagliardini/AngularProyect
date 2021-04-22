var express = require('express');
var router = express.Router();
const pool= require('../utils/bd');
const mail = require('./../mail');


/* GET home page. */

/* Autos motos */ 
router.post('/autosmotos', async function (req,res, next){
console.log('envio de mail y carga a base de datos');
let obj =  {
  nombre_automoto: req.body.nombre_auto,
  email_automoto: req.body.email_auto,
  telefono_automoto: req.body.telefono_auto
}
let altaAutos = await insertConsultaAutos(obj);

let objm = {
  to: 'guido.hg@hotmail.com',
  subject: 'CONSULTA SEGURO AUTO MOTO',
  text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_auto + " ------------" + 'email = ' + " " + req.body.email_auto +
        "---------- " + 'telefono =  ' + " " + req.body.telefono_auto
};


let envio_mail =  await mail.main(objm);
if (envio_mail) {
  console.log('consulta enviada');
  res.redirect('/');
  //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
}else{
  res.send('algo salio mal vuelva a intentar mas tarde');
  console.log('no se envio el mail.');
}
})
/*FIN auto motos */


/* HOGAR */ 

router.post('/hogar', async function (req,res, next){
  console.log('envio de mail y carga a base de datos');
  let obj =  {
    nombre_hogar: req.body.nombre_hogar,
    email_hogar: req.body.email_hogar,
    telefono_hogar: req.body.telefono_hogar
  }
  let altaHogar = await insertConsultaHogar(obj);
  
  let objm = {
    to: 'guido.hg@hotmail.com',
    subject: 'CONSULTA SEGURO HOGAR',
    text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_hogar 
          + " ------------" + 'email = ' + " " + req.body.email_hogar +
          "---------- " + 'telefono =  ' + " " + req.body.telefono_hogar
  };
  
  
  let envio_mail =  await mail.main(objm);
  if (envio_mail) {
    console.log('consulta enviada');
    res.redirect('/');
    //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
  }else{
    res.send('algo salio mal vuelva a intentar mas tarde');
    console.log('no se envio el mail.');
  }
  })
/* FIN HOGAR */ 

/*COMERCIO*/
router.post('/comercio', async function (req,res, next){
  console.log('envio de mail y carga a base de datos');
  let obj =  {
    nombre_comercio: req.body.nombre_comercio,
    email_comercio: req.body.email_comercio,
    telefono_comercio: req.body.telefono_comercio
  }
  let altaComercio = await insertConsultaComercio(obj);
  
  let objm = {
    to: 'guido.hg@hotmail.com',
    subject: 'CONSULTA SEGURO COMERCIO',
    text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_comercio 
          + " ------------" + 'email = ' + " " + req.body.email_comercio +
          "---------- " + 'telefono =  ' + " " + req.body.telefono_comercio
  };
  
  
  let envio_mail =  await mail.main(objm);
  if (envio_mail) {
    console.log('consulta enviada');
    res.redirect('/');
    //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
  }else{
    res.send('algo salio mal vuelva a intentar mas tarde');
    console.log('no se envio el mail.');
  }
  })
/*FIN COMERCIO*/
/*CONSORCIO*/
router.post('/consorcio', async function (req,res, next){
  console.log('envio de mail y carga a base de datos');
  let obj =  {
    nombre_consorcio: req.body.nombre_consorcio,
    email_consorcio: req.body.email_consorcio,
    telefono_consorcio: req.body.telefono_consorcio
  }
  let altaConsorcio = await insertConsultaConsorcio(obj);
  
  let objm = {
    to: 'guido.hg@hotmail.com',
    subject: 'CONSULTA CONSORCIO',
    text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_consorcio 
          + " ------------" + 'email = ' + " " + req.body.email_consorcio +
          "---------- " + 'telefono =  ' + " " + req.body.telefono_consorcio
  };
  
  
  let envio_mail =  await mail.main(objm);
  if (envio_mail) {
    console.log('consulta enviada');
    res.redirect('/');
    //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
  }else{
    res.send('algo salio mal vuelva a intentar mas tarde');
    console.log('no se envio el mail.');
  }
  })
/* FIN CONSORCIO */

/*ACCIDENTES PERSONALES */ 
router.post('/accpersonales', async function (req,res, next){
  console.log('envio de mail y carga a base de datos');
  let obj =  {
    nombre_accpersonales: req.body.nombre_accpersonales,
    email_accpersonales: req.body.email_accpersonales,
    telefono_accpersonales: req.body.telefono_accpersonales
  }
  let altaAccpersonales = await insertConsultaaccpersonales(obj);
  
  let objm = {
    to: 'guido.hg@hotmail.com',
    subject: 'CONSULTA ACCIDENTES PERSONALES',
    text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_accpersonales 
          + " ------------" + 'email = ' + " " + req.body.email_accpersonales +
          "---------- " + 'telefono =  ' + " " + req.body.telefono_accpersonales
  };
  
  
  let envio_mail =  await mail.main(objm);
  if (envio_mail) {
    console.log('consulta enviada');
    res.redirect('/');
    //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
  }else{
    res.send('algo salio mal vuelva a intentar mas tarde');
    console.log('no se envio el mail.');
  }
  })
/* FIN ACCIDENTES PERSONALES */

/*ART*/
router.post('/art', async function (req,res, next){
  console.log('envio de mail y carga a base de datos');
  let obj =  {
    nombre_art: req.body.nombre_art,
    email_art: req.body.email_art,
    telefono_art: req.body.telefono_art
  }
  let altaArt = await insertConsultaArt(obj);
  
  let objm = {
    to: 'guido.hg@hotmail.com',
    subject: 'CONSULTA ART',
    text: 'Nombre de la persona que consulta =   '+"--------- " + req.body.nombre_art +
          + " ------------" + 'email = ' + " " + req.body.email_art + 
          "---------- " + 'telefono =  ' + " " + req.body.telefono_art
  };
  
  
  let envio_mail =  await mail.main(objm);
  if (envio_mail) {
    console.log('consulta enviada');
    res.redirect('/');
    //tendria que tirar un alert o un mensaje diciendo que le va a llegar la informacion.
  }else{
    res.send('algo salio mal vuelva a intentar mas tarde');
    console.log('no se envio el mail.');
  }
  })
/*FIN ART*/



/*CONSULTA GENERAL PAGINA ---CONTACTO--- */
router.post('/mail', async function(req, res, next) {// para el mail
  //subjetc : CONSULTA PAGINA\
  console.log('envio de mail y carga a base de datos');
  let obj = {
    nombre_contacto :  req.body.nombre_contacto,
    email_contacto :  req.body.email_contacto ,
    telefono_contacto : req.body.telefono_contacto,
    consulta_contacto : req.body.consulta_contacto

  };
  let altaconsultaGenerales = await insertConsulta(obj);


  
 
let objm ={
  to:'guido.hg@hotmail.com', // aca es a DONDE va el mail
  subject:'CONSULTA PAGINA',
  text: 'Consulta-->  ' + " " + req.body.consulta_contacto + " " + ' Telefono--->   '+ " " +   req.body.telefono_contacto +  'Email--->'+ " " +  req.body.email_contacto
       +'Nombre---> ' + " "+  req.body.nombre_contacto
};
let envio_mail= await mail.main(objm);
if (envio_mail){
  console.log('mail enviado');
 
  res.redirect('/') ;// tengo que poner un mensaje de consulta enviada.
    
 
}else {
  res.send("ALGO SALIO MAL, VUELVE A INTENTAR");
}



})
/*FIN CONSULTA GENERAL PAGINA*/





/*CARGA COTIZACION*/
router.post('/', async  (req, res, next) => {
  let obj= {
   nombre_cot: req.body.nombre_cot,
   dni_cot: req.body.dni_cot,
   fechaNac_cot: req.body.fechaNac_cot,
   localidad_cot:  req.body.localidad_cot,
   marca_cot: req.body.marca_cot,
   modelo_cot: req.body.modelo_cot,
   ano_cot: req.body.año_cot,
   pago_cot: req.body.pago_cot
     }
    

let altaData= await insertData(obj);


let objm ={
  to:'guido.hg@hotmail.com', // aca es a DONDE va el mail
  subject:'COTIZACION POR PAGINA',
  text: 'NOMBRE=' + " " + req.body.nombre_cot + " " + 'DNI = ' + " " + req.body.dni_cot + "  " + 'FECHA NACIMIENTO = ' + " " + req.body.fechaNac_cot + " "  + 'LOCALIDAD = ' + " " + req.body.localidad_cot + " " + 'MARCA = '  + " " + req.body.marca_cot + " " + 'MODELO - VERSION = ' + " " + req.body.modelo_cot  + " " + 'AñO  = ' + " " + req.body.ano_cot + " " + 'FORMA DE PAGO  = ' + " " + req.body.pago_cot
};
let envio_mail= await mail.main(objm);
if (envio_mail){
  console.log('mail enviado');
 
  res.redirect('/') ;// tengo que poner un mensaje de consulta enviada.
    
 
}else {
  res.send("ALGO SALIO MAL, VUELVE A INTENTAR");
}
     /*COMO PONER UN ALERT QUE LE DIGA QUE FUE ENVIADA LA COTIZACION Y QUE LE VAN A RESPONDER
     PARA MI HAY QUE MODIFICAR LOS INPUT DEL FORM FALTARIA UN MAIL Y SOBRARIA ALGUN DATO*/   
 
}) 





router.get('/', async function(req, res, next) {
  res.render('index');
  console.log();
});





/*FUNCIONES */


async function insertData(obj){
  let query = 'insert into cotizaciones set ?';
  const rows =  await pool.query(query, obj);
   return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
}


async function insertConsulta(obj){
  let query= 'insert into contacto_pagina set  ?';
  const rows= await pool.query(query, obj);
  return rows;
  }
async function insertConsultaAutos(obj){
    let query = 'insert into  consulta_automoto set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }
  async function insertConsultaHogar(obj){
    let query = 'insert into  consulta_hogar set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }
  async function insertConsultaComercio(obj){
    let query = 'insert into  consulta_comercio set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }
  async function insertConsultaConsorcio(obj){
    let query = 'insert into  consulta_consorcio set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }
  async function insertConsultaaccpersonales(obj){
    let query = 'insert into  consulta_accpersonales set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }
  async function insertConsultaArt(obj){
    let query = 'insert into  consulta_art set ?';
    const rows =  await pool.query(query, obj);
     return rows; // devuelve el ultimo ID insertado, osea devuelve un numero
  }

  
module.exports = router;

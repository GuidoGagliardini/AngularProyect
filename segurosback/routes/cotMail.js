const express = require('express');
const router = express.Router();
const mail = require ('./../mail');
const service = require ('./../models/cotiza');

const cotMail = async (req,res)=>{
    try{
        const infoCotiza = {
            nombre_cot: req.body.nombre_cot,
            dni_cot : req.body.dni_cot,
            fechaNac_cot: req.body.fechaNac_cot,
            localidad_cot: req.body.localidad_cot,
            marca_cot: req.body.marca_cot,
            modelo_cot : req.body.modelo_cot,
            ano_cot : req.body.ano_cot,
            puertas_cot: req.body.puertas_cot,
            pago_cot : req.body.pago_cot,
            email_cot: req.body.email_cot,
        }
        const EmailAdmin = {
            mail_admin : 'guido.hg@hotmail.com'
        }// esto tmb lo podria traer de la base de datos y que se modifique desde el panel admin
      
    
    
        let htmlNoReply = `
        <html>
            <body>
            <h1>COTIZACION</>

                <h4>Nombre : ${infoCotiza.nombre_cot} 
                </h4>
                <h3>${infoCotiza.dni_cot}</h3>
                <p>${infoCotiza.fechaNac_cot}</p>
                <br>
                <p>Hemos recibido su pedido de cotizacion, si los datos son correctos luego presione OK
                y ahi si es correcto lo tendria que llevar a un link de 'activacion' tipo TOKEN recovery,
                y validar ese form, de lo contrario si los datos que ve el cliente estan mal lo tendria que 
                redirigir al mismo formulario que antes habia hecho , con los mismos valores que ya habia cargado
                y permitir que los actualice(update) enviar el form nuevamente, otro mail confirmar y chau!</p>
                
                <h2>Datos del vehiculo</h2>
                <h4>MARCA: ${infoCotiza.modelo_cot}</h4>
                <h4>MARCA: ${infoCotiza.marca_cot}</h4>
                <h4>MARCA: ${infoCotiza.puertas_cot}</h4>
                GRACIAS POR SU CONSULTA👍
            </body>
        </html>
    `
    let htmlAdmin = `
    <html>
            <body>
                <h4>Nombre : ${infoCotiza.nombre_cot} 
                </h4>
                
                <h2>El vehiculo marca</h2>
                <h4>MARCA: ${infoCotiza.marca_cot}</h4>
                GRACIAS POR SU CONSULTA👍
            </body>
        </html>
    `
    
    let enviomail = await mail.cotiza(infoCotiza.email_cot, htmlNoReply);
    let eneviomailAdmin =  mail.cotizaAdmin(EmailAdmin.mail_admin, htmlAdmin);
    res.json({messege: 'mail enviado'});

    





    // Cara la cotizacion a la base de datos 
    let cargabd =  await service.CargaCotizacion(infoCotiza);
    console.log('operacion terminada');

    }
    
    
    
    catch (error){
        console.log(error)
        res.sendStatus(500);

    }
   
}

router.post('/', cotMail)

module.exports = router;


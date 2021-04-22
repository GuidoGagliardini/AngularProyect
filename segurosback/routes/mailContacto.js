const express = require('express');
const router = express.Router();
const mail = require ('./../mail');
const contactoservice =  require ('./../models/contacto');

const mailContacto= async (req,res)=>{
    try{
        const infoContacto= {
            nombre_contacto : req.body.nombre_contacto,
            email_contacto: req.body.email_contacto,
            telefono_contacto : req.body.telefono_contacto,
            consulta_contacto : req.body.consulta_contacto,

            mail: 'guido.hg@hotmail.com' //MailAdmin
                                        
        }
        console.log(req.body);
        console.log(infoContacto);
        let result = await contactoservice.todascontacto();
        
        let html = ` 
        <html>
            <body>
            <h1>Se recibio una consulta :
                <h4>Nombre : ${infoContacto.nombre_contacto} 
                </h4>
                <h4>Email : ${infoContacto.email_contacto}</h4>
                <h4>Telefono : ${infoContacto.telefono_contacto}</h4>
                <h4>Consulta : ${infoContacto.consulta_contacto}</h4>
                
                
                <h4>Numero de consulta : ${result[0].id_contacto}</h4>
                CONTACTO GENERAL DE LA PAGINA 
            </body>
        </html>
    `
    let htmlNoreply = 
    `
        <html>
            <body>
            <h1>Gracias por su consulta 
                <h2>Nombre : ${infoContacto.nombre_contacto} 
                </h4>
                <h4>Email : ${infoContacto.email_contacto}</h4>
                <h4>Telefono : ${infoContacto.telefono_contacto}</h4>
                <h4>Consulta : ${infoContacto.consulta_contacto}</h4>
                <p>En breves un asesor se comunicara con usted para brindar mas detalles </p>
                <h1>Gracias por su consulta!!! 😁</h1>
                
                
                
            </body>
        </html>
    `
    
    let noreply = await mail.noreplyContacto(infoContacto.email_contacto, htmlNoreply);

    let enviomail = await mail.contactoadmin(infoContacto.mail, html);
    console.log('MailEnviado')
    res.json({messege: 'mail enviado'});

    }
    
    
    
    catch (error){
        throw error ;

    }
   
}

router.post('/', mailContacto)

module.exports = router;


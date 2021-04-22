const express = require ('express');
const router = express.Router();
const serviceSegurosMail =  require ('./../mail');
//TENGO QUE HACERLO RELACIONANDO LAS TABLAS, ES DECIR CUANDO EL ID DE LA TABLA
//SEGUROS ES 1 QUE CORRESPONDA TAMBIEN A LA TABLA DEL SEGURO QUE SE CLIKEA
//me faltaria hacer la carga iterando en lastablas de sql con un condicional

// FIJARSE PORQUE LOS MAIL LLEGAN A NO DESEADO 

const envioMailSegurosbyId = async (req,res) =>{

    
 try{
        const id = req.params.id;
         const {email} = req.body;
        switch (id){
            case "1" :
                var htmlInfoSeguro = `
                <html>
                <body>
                <h1>ACCIDENTES PERSONALES</h1>
        
                    <h4>Gracias ${email} por su consulta sobre nuestros servicios
                    </h4>
                   
                </body>
            </html>
                `
                await   serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
                console.log('se envio el mail')
                res.json({messege:'Mail Enviado'});
                break;
        
            case "2" :
                var htmlInfoSeguro = `
                <html>
                <body>
                <h1>A R T </h1>
        
                    <h4>Gracias ${email} por su consulta sobre nuestros servicios
                    </h4>
                   
                </body>
            </html>
                `
                await serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
                console.log('se envio el mail')
                res.json({messege:'Mail Enviado'});
                break;
            case "3" :
                var htmlInfoSeguro = `
            <html>
            <body>
            <h1>AUTO Y MOTO </h1>
    
                <h4>Gracias ${email} por su consulta sobre nuestros servicios
                </h4>
               
            </body>
        </html>
            `
                 await serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
                console.log('se envio el mail')
                res.json({messege:'Mail Enviado'});
                break;
            case "4" : 
            var htmlInfoSeguro = `
            <html>
            <body>
            <h1>COMERCIO</h1>
    
                <h4>Gracias ${email} por su consulta sobre nuestros servicios
                </h4>
               
            </body>
        </html>
            `
            await  serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
            console.log('se envio el mail')
            res.json({messege:'Mail Enviado'});
            break;
            case "5" : 
             var htmlInfoSeguro = `
                      <html>
                      <body>
                      <h1>CONSORCIO</h1>
              
                          <h4>Gracias ${email} por su consulta sobre nuestros servicios
                          </h4>
                         
                      </body>
                  </html>
                      `
             await  serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
             console.log('se envio el mail')
             res.json({messege:'Mail Enviado'});
             break;
             case "6" :
                var htmlInfoSeguro = `
                <html>
                <body>
                <h1>HOGAR</h1>
        
                    <h4>Gracias ${email} por su consulta sobre nuestros servicios
                    </h4>
                   
                </body>
            </html>
                `
                await serviceSegurosMail.noreplyContacto(email, htmlInfoSeguro);
                console.log('se envio el mail')
                res.json({messege:'Mail Enviado'});
                break;
            default :
            console.log('erroraso');
            res.sendStatus(500);
   }
 
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }

    
}

router.post('/:id', envioMailSegurosbyId);
module.exports = router;
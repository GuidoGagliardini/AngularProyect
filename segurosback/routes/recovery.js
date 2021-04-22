const express = require('express');
const router = express.Router();
const service = require('./../models/auth');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const serviceMail = require ('./../mail');


const recovery = async(req, res, next) => {
    try {
        const { email } = req.params;
        const id_u = await service.getIdByuser(email);
        console.log(req.params)
        if(id_u){
            
            const privateKey = fs.readFileSync('./utils/keys/private.pem');
            const payload = { id_u};
            const signOptions = { expiresIn: '2h', algorithm: 'RS256' };
    
            const token = jwt.sign(payload, privateKey, signOptions);

            const recoveryTemplate = `
                                        <html>
                                        <body>
                                            <h4>Recovery token: ${token}</h4>
                                            <h4>Link to change password => <a href="${process.env.URL_SERVER_FRONT}/change/${token}">here</a></h4>
                                        </body>
                                        </html>
                                    `;
            const mail = await serviceMail.noreplyContacto(email, recoveryTemplate);

            res.json({ status: true, id: mail });

        } else {
            res.json({ status: true, message: 'The email, doesn\'t exist.' });
        }
        
    } catch (error) {
        res.sendStatus(500);
    }
}


router.get('/:email', recovery);
module.exports=router;

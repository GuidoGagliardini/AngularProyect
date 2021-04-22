const express = require('express');
const router = express.Router();
const service = require('./../models/auth');
const fs = require('fs');
const jwt = require('jsonwebtoken');


const getToken = async(req, res, next) => {
    try {

        const { token } = req.params;
        
        console.log(token);
        if(token) {
            const publicKey = fs.readFileSync('./utils/keys/public.pem');
            const decoded = jwt.verify(token, publicKey);
            console.log(publicKey);
            console.log(decoded);
            console.log(decoded.id_u);
            console.log(decoded.id_u[0]);
            if(decoded.id_u) {                
                res.json({ status: true, id: decoded.id_u});
            } else {
                res.json({ status: true, message: 'Email not found' });
            }
        }

    } catch (error) {
        res.sendStatus(500);
    }
}

const updatePassword = async(req, res, next) => {
    try {
        const { id_u, password } = req.body;
        console.log(id_u)
        console.log(password)
        if(id_u && password) {
            const result = await service.updateUser(id_u,password);
            console.log(result)

            res.json({ status: true, message: result });
        } else {
            res.json({ status: true, message: 'Email not found' });
            console.log('email not found');
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

router.get('/:token', getToken);
router.post('/', updatePassword);

module.exports = router;

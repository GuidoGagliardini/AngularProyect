const jwt = require('jsonwebtoken');
const fs = require('fs');

securedAdmin = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        token = token.replace('Bearer ', '');
        const publicKey = fs.readFileSync('./utils/keys/public.pem');
        const decoded = jwt.verify(token, publicKey);

        req.id = decoded.id_u;
        req.permisos = decoded.permisos_u;
      

        req.id == 1 ? next() : res.status(401).json({ message: 'Unauthorized' });
    } catch (error) {
        console.error(error);
        res.sendStatus(401);
    }
}
module.exports = {
    securedAdmin
}

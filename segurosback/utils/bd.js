
const knex = require('knex')({
    client: 'mysql',
    connection : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    debug: true,
    pool: { min: 2, max: 8 } // siempre poner esto
    
});

module.exports = knex;







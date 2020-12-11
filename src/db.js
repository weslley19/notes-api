require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5,
});

pool.cone((error) => {
    if (error) {
        throw error;
    }

    const res = pool.query('select * from notes');
    console.log(res);
});

module.exports = pool;
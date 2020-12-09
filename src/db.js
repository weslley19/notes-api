require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5,
});

async function connectionDataBase() {
    let connection;
    try {
        connection = await pool.getConnection();
        // Testando conexão
        const rows = await connection.query('select * from notes');
        console.log(rows);

        if (connection) {
            console.log(`Connection successfull on database ${process.env.DB_NAME}`);
        }
    } catch (error) {
        throw error;
    }
}

connectionDataBase(); 
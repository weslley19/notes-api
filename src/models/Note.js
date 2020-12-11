const pool = require('../db');
const connectionDataBase = require('../db');
const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {

            let connection;
            try {
                connection = pool.getConnection();
                // Testando conexão
                const rows = connection.query('select * from notes');
                console.log(rows);

                if (connection) {
                    console.log(`Connection successfull on database ${process.env.DB_NAME}`);
                }
            } catch (error) {
                throw error;
            }

        });
    }
};
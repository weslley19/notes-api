const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from notes', (erros, results) => {
                if (erros) {
                    reject(erros);
                    return;
                }

                resolve(results);
            });
        });
    }
};
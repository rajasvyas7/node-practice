const db = require('../helpers/db');

class Users {
    add (data) {
        console.log('db connection', db);
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users SET ?', data, function(error, result, fields) {
                if (error) { 
                    console.log('db error', error);
                    throw error;
                }
                console.log('db result', result);
                console.log('db fields', fields);
                resolve(true);
            });
            // console.log(sql.sql);
            // return true;
        })
    }
}

module.exports = new Users();
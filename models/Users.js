const db = require('../helpers/db');

class Users {
    add (data) {
        // console.log('db connection', db);
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users SET ?', data, function(error, result, fields) {
                if (error) { 
                    console.log('db error', error);
                    reject(error);
                    // throw error;
                }
                if (result && result.insertId) {
                    resolve(result.insertId);
                }
                else  {
                    reject('Something went wrong!');
                }
                
            });
        })
    }
}

module.exports = new Users();
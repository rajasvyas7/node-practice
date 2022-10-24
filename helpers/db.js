

const mysql = require('mysql');

function db() {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'rajas',
        password: 'Focus@12',
        database: 'node_practice'
    });
    return connection;
    // try {
    //     return connection.connect(function(err) {
    //         if (err) {
    //           console.error('error connecting: ' + err.stack);
    //           return;
    //         }
    //         console.log('connected as id ' + connection.threadId);
    //         return true;
    //       });
    //     console.log('DB connection successfull!');
            
    // } catch (error) {
    //     console.log('DB Connection failed ', error);
    // }
    
    
};

module.exports = db();



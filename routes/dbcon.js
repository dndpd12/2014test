
var mysql = require('mysql');

var connection =mysql.createConnection({
    host :'localhost',
    port :3306,
    user : 'root',
    password :'admin',
    database  : 'mysqldb'

});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});


exports.conn = connection;

// 해당 eonnection을 exports.conn으로 반납?
// var conn = require('./dbcon') 을 통해 conn.connection으로 사용할 수 있음.
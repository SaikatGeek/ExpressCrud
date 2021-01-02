var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
  database: 'saikat'
});
module.exports = connection;
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S1nic_Wqe',
    database: 'employee_db'
});

module.exports = db;
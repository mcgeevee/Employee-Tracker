const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "your_new_password",
  database: "employee_db",
});

connection.connect();

module.exports = connection;
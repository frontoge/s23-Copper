const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

export = db
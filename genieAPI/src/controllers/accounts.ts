import {NextFunction, Request, Response} from "express";
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

interface User {
    username: string
}

///Get a users ID from their username
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    await db.connect((err: Error) => {
        if (err) throw err;
        db.query(`SELECT id FROM users WHERE username = '${req.params.username}'`, (err: Error, result: Array<User>, fields: Array<any>) =>{
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            return res.status(200).json(result[0]);
        } )
    })
}

export default {getUser}
import {NextFunction, Request, Response} from "express";
import db from "../db_connect"

interface User {
    id: string
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
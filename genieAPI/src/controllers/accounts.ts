import {NextFunction, Request, Response} from "express";
import db from "../db_connect"

interface User {
    id: string
    username: string
}

///Get a users ID from their username
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    await db.connect((err: Error) => {
        if (err) {
            return res.status(400).json({
                message: err.message
            })
        }
        db.query(`SELECT id FROM users WHERE username = '${req.params.username}'`, (err: Error, result: Array<User>, fields: Array<any>) =>{
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            if(result[0] === undefined) {
                return res.status(404).json({
                    message: "Not found"
                });
            }
            return res.status(200).json(result[0]);
        } )
    })
}

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body);
    //Check for params
    if (username === undefined || password === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`)
        db.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`, (err: Error, results: Array<User>) => {
            if (err) {
                return res.status(400).json({
                    message: `Failed to make SQL Query: ${err.message}`
                })
            }
            return res.status(200).json({
                message: "Successfully added."
            })
        })
    })
}

export default {getUser, createUser}
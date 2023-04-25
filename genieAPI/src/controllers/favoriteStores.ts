import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

interface favStores {
    store: string
}

const getFavStores = (req: Request, res: Response, next: NextFunction) => {
    db.connect((err: Error) => {
        if (err) throw err;
        db.query(`SELECT store FROM favorite_stores WHERE owner = ${req.params.userID}`, (err: Error, results: Array<favStores>, fields: Array<any>) => {
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            return res.status(200).json({
                data: results
            })
        })
    })
}

export default {getFavStores}
import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

interface favStores {
    store: string
    owner: number

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

const addFavoritestore = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const store = req.body.store
    
    console.log(req.body);
    //Check for params
    if (owner === undefined || store === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO favorite_stores (owner, store ) VALUES (${owner}, '${store}')`)
        db.query(`INSERT INTO favorite_stores (owner, store) VALUES (${owner}, '${store}')`, (err: Error, results: Array<favStores>) => {
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

const deleteFavoritestore = (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    db.connect((err: Error) => {
        if (err) {
            return res.status(400).json({
                message: `Failed to connect to DB: ${err.message}`
            })
        }
        db.query(`DELETE FROM favorite_stores WHERE owner = ${params.owner} AND store = '${params.store}'`, (err: Error, results: Array<favStores>) =>{
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            return res.status(200).json({
                message: "Successfully deleted."
            })
        })
    })
}


export default {getFavStores, addFavoritestore, deleteFavoritestore}
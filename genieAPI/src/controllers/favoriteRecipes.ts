import {NextFunction, Request, Response} from "express";
import db from "../db_connect"

interface FavRecipes {
    id: string
    recipeid: string
}

const getFavRecipes = (req: Request, res: Response, next: NextFunction) => {
    db.connect((err: Error) => {
        if (err) throw err;
        db.query(`SELECT id, recipeid FROM favorite_recipies WHERE owner = ${req.params.userID}`, (err: Error, results: Array<FavRecipes>, fields: Array<any>) => {
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

export default {getFavRecipes}
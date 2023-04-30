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

const addFavRecipe = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const recipeid = req.body.recipeid

    console.log(req.body);
    //Check for params
    if (owner === undefined || recipeid === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO favorite_recipies (owner, recipeid) VALUES (${owner}, ${recipeid})`)
        db.query(`INSERT INTO favorite_recipies (owner, recipeid) VALUES (${owner}, ${recipeid})`, (err: Error, results: Array<FavRecipes>) => {
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

export default {getFavRecipes, addFavRecipe}
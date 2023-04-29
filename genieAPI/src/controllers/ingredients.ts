import {NextFunction, Request, Response} from "express";
import db from "../db_connect"


interface Ingredients {
    userId: string,
    ingredientId: string
}

const getIngredients = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.recipeId;
    const ingredientId = req.params.userId;

    db.connect((err: Error) => {
        if(err) throw err;
        db.query(`SELECT userId, ingredientId FROM ingredients WHERE owner = ${req.params.userId}`, (err: Error, results: Array<Ingredients>, fields: Array<any>) => {
            if (err) {
                return res.status(400).json({
                    message: `ERROR executing getIngredients ${err.message}`

                })
            }
             return res.status(200).json({
                    message: "Ingredients is succesfully added"
             })   
        })

    })
}

export default {getIngredients}
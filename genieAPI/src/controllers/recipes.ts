import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

interface RecipeInfo {
name: string,
description: string,
ingredients: JSON,
img: string
}

const getRecipe = (req: Request,  res: Response, next: NextFunction)  => {
    db.connect((err: Error) =>{
         if(err)throw err;
         db.query(`SELECT name, description, ingredients, img FROM uploadedRecipes WHERE owner = ${req.params.owner}`,(err: Error, results: Array<RecipeInfo>, fields: Array<any>) => {
            if(err) {
                return res.status(400).json({
                    message:err.message
                })
            }
            return res.status(200).json({
                data: results
            })
         })
        
    })
}
const createRecipe = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const name = req.body.name
    const description = req.body.description
    const ingredients = req.body.ingredients
    const img = req.body.img
    console.log(req.body);
    //Check for params
    if (owner === undefined || name === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO uploadedRecipes (owner, name, description, ingredients, img) VALUES (${owner}, '${name}', '${description}', '${ingredients}','${img})'`)
        db.query(`INSERT INTO uploadedRecipes (owner, name, description, ingredients, img) VALUES (${owner}, '${name}', '${description}', '${ingredients}','${img}')`, (err: Error, results: Array<RecipeInfo>) => {
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


const deleteRecipe = (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    db.connect((err: Error) => {
        if (err) {
            return res.status(400).json({
                message: `Failed to connect to DB: ${err.message}`
            })
        }
        db.query(`DELETE FROM uploadedRecipes WHERE owner = ${params.owner} AND name = '${params.name}'`, (err: Error, results: Array<RecipeInfo>) =>{
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

export default{getRecipe, createRecipe, deleteRecipe}
import {Request, Response, NextFunction } from "express";
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
         db.query(`SELECT name, description, ingredients, img FROM uploadedRecipes WHERE owner = ${req.params.userID}`,(err: Error, results: Array<RecipeInfo>, fields: Array<any>) => {
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

const addRecipe = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const name = req.body.name
    const description = req.body.description
    const ingredients = req.body.ingredients
    const img = req.body.img

    console.log(req.body);
    //Check for params
    if (name === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO uploadedRecipes (owner, name, description, ingredients, img) VALUES (${owner}, '${name}', '${description}', '${ingredients}', '${img}')`)
        db.query(`INSERT INTO uploadedRecipes (owner, name, description, ingredients, img) VALUES (${owner}, '${name}', '${description}', '${ingredients}', '${img}')`, (err: Error, results: Array<RecipeInfo>) => {
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

export default{getRecipe, addRecipe}

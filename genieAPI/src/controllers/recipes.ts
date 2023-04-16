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

export default{getRecipe}
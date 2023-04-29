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



export const deleteFavRecipes = async(req: Request, res: Response, next: NextFunction) => {
    const RecipeId = req.params.recipeId;
    const userId = req.params.userId;

    // TODO: Remove recipe from user's list of fav recipes

  db.connect((err: Error) =>{
        if(err) throw err;
        db.query(`DELETE FROM favorite_recipes WHERE owner =${req.params.userId} AND recipeID = '${req.params.recipeId}`, (err: Error, results: Array<FavRecipes>) =>{
            if(err) {
                return res.status(400).json({
                    message: `Error executing deleteFavoriteRecipe ${err.message}`
                })
            }
                return res.status(200).json({
                    message:  "Recipe is deleted from favorites!"
                })
        } )
  })

} 
export default {getFavRecipes,deleteFavRecipes}
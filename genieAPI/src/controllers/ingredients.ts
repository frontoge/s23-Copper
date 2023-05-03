import {NextFunction, Request, Response} from "express";
import db from "../db_connect"


interface Ingredients {
    userId: string,
    ingredientId: string,
    quantity: number
}

const getIngredients = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    const ingredientId = req.params.ingredientId;

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

const deleteIngredients = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    const ingredientId = req.params.ingredientId;

    db.connect((err: Error) => {
        if(err) throw err;
        db.query(`DELETE FROM ingredients, WHERE owner = ${req.params.userId} AND ingredients = '${req.params.ingredientId}'`, (err: Error, results: Array<Ingredients>, fields: Array<any>) => {
            if (err) {
                return res.status(400).json({
                    message: `ERROR executing deleteIngredients ${err.message}`

                })
            }
             return res.status(200).json({
                    message: "Succesfully deleted"
             })   
        })

    })

}

const addIngredients = async(req: Request, res: Response, next: NextFunction)=>{

    const userId = req.body.userId;
    const item = req.body.item;
    const quantity = req.body.quantity;
    if (userId === undefined || item === undefined){
        return res.status(400).json({
            message: "Missing required parameters for create"
        })
    }

    db.connect((err: Error)=>{
        if(err) {
            return res.status(400).json({
                message:err.message
            })
        }
        console.log(`ADD ingredients(owner,item,quantity) VALUES (${userId},'${item}',${quantity})`)
        db.query(`ADD ingredients(owner,item,quantity) VALUES (${userId},'${item}',${quantity})`,
        (err: Error, results: Array<Ingredients>) => {
            if (err){
                return res.status(400).json ({
                    message: `Failed to make SQL query: ${err.message}`
                })
            }
            return res.status(200).json({
                message: "Successful added"
            })
        })
    })
}


const updateIngredients = async(req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    if (data.quantity == undefined){
        return res.status(400).json({
            message: "Missing body parameters"
        })
    }
    if (req.params.userId === undefined || req.params.ingredientId === undefined) {
        return res.status(400).json({
            message: "Invalid parameters to query"
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`UPDATE ingredients SET quantity = ${data.quantity} WHERE owner = ${req.params.userID} and item = '${req.params.item}'`,
            (err: Error, results: Array<Ingredients>) => {
                if (err) {
                    return res.status(400).json({
                        message: `Invalid SQL Query: ${err.message}`
                    });
                }
                return res.status(200).json({
                    message: "Successfully updated"
                })
            })
    })


}





export default {getIngredients, deleteIngredients,addIngredients,updateIngredients}
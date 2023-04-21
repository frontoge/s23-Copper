import {Request, Response, NextFunction} from "express";
import db from "../db_connect";

interface grocerylist {
    item: string,
    quantity: number

}

const getGroceryList = (req: Request, res: Response, next: NextFunction)=>{
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`SELECT item, quantity FROM grocerylist WHERE owner = ${req.params.userID}`,(err: Error, result: Array<grocerylist>, fields: Array<any>)=>{
            if (err){
                return res.status(400).json({
                    message:err.message
                })
            }
            return res.status(200).json({
                data:result
            })
        })
    })
}

const creategrocerylist = (req: Request, res: Response, next: NextFunction)=>{

    const owner = req.body.owner;
    const item = req.body.item;
    const quantity = req.body.quantity;
    if (owner === undefined || item === undefined){
        return res.status(400).json({
            message: "Missing required parameters for create"
        })
    }
    db.connect((err: Error)=>{
        if(err) throw err;
        console.log(`INSERT INTO grocerylist(owner,item,quantity) VALUES (${owner},${item},${quantity})`)
        db.query(`INSERT INTO grocerylist (owner,item,quantity) VALUES (${owner},${item},${quantity})`),
        (err: Error, results: Array<grocerylist>) => {
            if (err){
                return res.status(400).json ({
                    message: `Failed to make SQL query: ${err.message}`
                })
            }
            return res.status(200).json({
                message: "Successful added"
            })
        }
    })
}

export default{getGroceryList, creategrocerylist}
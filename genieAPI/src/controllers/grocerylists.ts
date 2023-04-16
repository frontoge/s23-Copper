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


export default{getGroceryList}
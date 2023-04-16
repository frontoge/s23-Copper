import {Request, Response, NextFunction} from "express";
import db from "../db_connect";

const getGroceryList = (req: Request, res: Response, next: NextFunction)=>{
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`SELECT item, quantity, active FROM grocerylist WHERE owner = ${req.params.userID}`,(err: Error, result: Array<any>, fields: Array<any>)=>{

        })
    })
}

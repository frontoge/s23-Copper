import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

interface HouseholdMember {
    name: string,
    diet: string,
    restrictions: string,
    active: boolean
}

const getHousehold = (req: Request, res: Response, next: NextFunction) => {
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`SELECT name, diet, restrictions, active FROM profiles WHERE owner = ${req.params.userID}`, (err: Error, results: Array<HouseholdMember>, fields: Array<any>) => {
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

export default {getHousehold}

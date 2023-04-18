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

const createHousehold = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const name = req.body.name
    console.log(req.body);
    //Check for params
    if (owner === undefined || name === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create."
        })
    }
    db.connect((err: Error) =>{
        if (err) throw err;
        console.log(`INSERT INTO profiles (owner, name) VALUES (${owner}, '${name}')`)
        db.query(`INSERT INTO profiles (owner, name) VALUES (${owner}, '${name}')`, (err: Error, results: Array<HouseholdMember>) => {
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

export default {getHousehold, createHousehold}

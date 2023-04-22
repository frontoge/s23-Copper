import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

interface HouseholdMember {
    owner: number
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

const updateHousehold = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    if (data.diet === undefined || data.restrictions === undefined || data.active === undefined){
        return res.status(400).json({
            message: "Missing body parameters"
        })
    }

    if (req.params.owner === undefined || req.params.name === undefined) {
        return res.status(400).json({
            message: "Invalid parameters to query"
        })
    }
    console.log(`UPDATE profiles SET diet = '${data.diet}', restrictions = '${data.restrictions}', active = ${data.active} WHERE owner = ${req.params.owner} AND name = ${req.params.name}`)
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`UPDATE profiles SET diet = '${data.diet}', restrictions = '${data.restrictions}', active = ${data.active ? 1 : 0} WHERE owner = ${req.params.owner} AND name = '${req.params.name}'`,
            (err: Error, results: Array<HouseholdMember>) => {
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

export default {getHousehold, createHousehold, updateHousehold}

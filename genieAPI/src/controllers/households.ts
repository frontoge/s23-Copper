import {NextFunction, Request, Response} from "express";
import db from "../db_connect"

interface HouseholdMember {
    active: boolean,
    restrictions: JSON
    name: string
    owner: number
}

const getHousehold = async (req: Request, res: Response, next: NextFunction) => {
    await db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`SELECT * FROM profiles WHERE owner = ${req.params.userID}`, (err: Error, result: Array<HouseholdMember>) =>{
            //Do something
        })
    })
}

export default {getHousehold}
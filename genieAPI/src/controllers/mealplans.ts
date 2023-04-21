import { Request, Response, NextFunction } from "express";
import db from "../db_connect";

enum MealType {
    "Breakfast",
    "Lunch",
    "Dinner"
}

interface MealPlan {
    recpieID: string
    date: Date
    type: MealType
    quantity: number

}

const getMealPlan = (req: Request, res: Response, next: NextFunction) => {
    db.connect((err: Error) => {
        if (err) throw  err;
        db.query(`SELECT recpieID, date, type, quantity FROM mealplan WHERE owner = ${req.params.userID}`, (err: Error, results: Array<MealPlan>, fields: Array<any>) => {
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

const createMealPlan = (req: Request, res: Response, next: NextFunction) => {
    const owner = req.body.owner
    const recpieID = req.body.recpieID
    console.log(req.body);
    if (owner === undefined || recpieID === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create"
        })
    }
    db.connect((err: Error) => {
        if (err) throw err;
        console.log(`INSERT INTO mealplan (owner, recpieID) VALUES (${owner}, ${recpieID})`)
        db.query(`INSERT INTO mealplan (owner, recpieID) VALUES (${owner}, ${recpieID})`, (err: Error, results: Array<MealPlan>) => {
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

export default {getMealPlan, createMealPlan}
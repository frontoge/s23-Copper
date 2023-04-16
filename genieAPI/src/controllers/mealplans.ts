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

export default {getMealPlan}
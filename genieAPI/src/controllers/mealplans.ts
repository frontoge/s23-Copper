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
    const date = req.body.date
    const type = req.body.type
    const title = req.body.title
    console.log(req.body);
    if (owner === undefined || recpieID === undefined) {
        return res.status(400).json({
            message: "Missing required parameters for create"
        })
    }
    db.connect((err: Error) => {
        if (err) throw err;
        console.log(`INSERT INTO mealplan (owner, recpieID, date, type) VALUES (${owner}, ${recpieID}, ${date}, ${type})`)
        db.query(`INSERT INTO mealplan (owner, recpieID) VALUES (${owner}, ${recpieID}, ${date}, ${type})`, (err: Error, results: Array<MealPlan>) => {
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

const updateMealPlan = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    if (data.quantity === undefined){
        return res.status(400).json({
            message: "Missing body parameters"
        })
    }

    if (req.params.owner === undefined || req.params.recpieID === undefined) {
        return res.status(400).json({
            message: "Invalid parameters to query"
        })
    }
    console.log(`UPDATE mealplan SET quantity = '${data.quantity}' WHERE owner = ${req.params.owner} AND recpieID = ${req.params.recpieID}`)
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`UPDATE mealplan SET quantity = '${data.quantity}' WHERE owner = ${req.params.owner} AND recpieID = '${req.params.recpieID}'`,
            (err: Error, results: Array<MealPlan>) => {
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

const deleteMealPlan = (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    db.connect((err: Error) => {
        if (err) {
            return res.status(400).json({
                message: `Failed to connect to DB: ${err.message}`
            })
        }
        db.query(`DELETE FROM mealplan WHERE owner = ${params.owner} AND recpieID = '${params.recpieID}'`, (err: Error, results: Array<MealPlan>) =>{
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            return res.status(200).json({
                message: "Successfully deleted."
            })
        })
    })
}

export default {getMealPlan, createMealPlan, updateMealPlan, deleteMealPlan}
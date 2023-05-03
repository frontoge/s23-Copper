import {Request, Response, NextFunction} from "express";
import db from "../db_connect";
//import Cookies from "universal-cookie"

interface grocerylist {
    item: string,
    quantity: number
    list: JSON
}

/*function ExampleComponent(props) {
    const cookies = Cookies();
  
    //Code to actually get the login stuff
    const userData = cookies.get("login")
    //userData should be an object formatted like: {id: xxxx} now.
    return (
      <div>
        ...
      </div>
    )
  }
*/
const getGroceryList = (req: Request, res: Response, next: NextFunction)=>{
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`SELECT item, quantity, list FROM grocerylist WHERE owner = ${req.params.userID}`,(err: Error, result: Array<grocerylist>, fields: Array<any>)=>{
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
    const list = req.body.list;
    if (owner === undefined){
        return res.status(400).json({
            message: "Missing required parameters for create"
        })
    }
    db.connect((err: Error)=>{
        if(err) {
            return res.status(400).json({
                message:err.message
            })
        }
        console.log(`INSERT INTO grocerylist(owner,item,quantity, list) VALUES (${owner},'${item}',${quantity}, '${list}')`)
        db.query(`INSERT INTO grocerylist (owner,item,quantity, list) VALUES (${owner},'${item}',${quantity}, '${list}')`,
        (err: Error, results: Array<grocerylist>) => {
            if (err){
                return res.status(400).json ({
                    message: `Failed to make SQL query: ${err.message}`
                })
            }
            return res.status(200).json({
                message: "Successful added"
            })
        })
    })
}

const updateGrocerylist = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
   
    if (data.quantity === undefined){
        return res.status(400).json({
            message: "Missing body parameters"
        })
    }
    
    
    db.connect((err: Error) =>{
        if (err) throw err;
        db.query(`UPDATE grocerylist SET quantity = ${data.quantity} WHERE owner = ${req.params.owner} and item = '${req.params.item}'`,
            (err: Error, results: Array<grocerylist>) => {
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

const deleteGroceylist = (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    db.connect((err: Error) => {
        if (err) {
            return res.status(400).json({
                message: `Failed to connect to DB: ${err.message}`
            })
        }
        db.query(`DELETE FROM grocerylist WHERE owner = ${params.owner} AND item = '${params.item}'`, (err: Error, results: Array<grocerylist>) =>{
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


export default{getGroceryList, creategrocerylist, updateGrocerylist, deleteGroceylist}
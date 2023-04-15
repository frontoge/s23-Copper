import {NextFunction, Request, Response} from "express";

// Example of endpoint logic. This is where the logic of the API call would go such as database queries, filtering etc.
const exampleEndpoint = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: "It works!"
    })
}

export default {exampleEndpoint}
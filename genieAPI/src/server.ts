/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import exampleRoutes from './routes/example';
import userRoutes from './routes/accounts';
import householdRoutes from './routes/households';
import households from "./controllers/households";
import favRecipeRoutes from "./routes/favoriteRecipes";
import mealPlanRoutes from "./routes/mealplans";
import groceryListRoutes from "./routes/grocerylists";

const dotenv = require("dotenv");
dotenv.config();

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});


/** Routes */
router.use('/api/examples', exampleRoutes);
router.use('/api/accounts', userRoutes);
router.use('/api/households', householdRoutes);
router.use('/api/favoriteRecipes', favRecipeRoutes);
router.use('/api/mealplans', mealPlanRoutes);
router.use('/api/grocerylists', groceryListRoutes);


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT;

httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
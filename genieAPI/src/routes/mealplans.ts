import express from "express";
import controller from "../controllers/mealplans"

const router = express.Router();

router.get('/:userID', controller.getMealPlan);

export = router;
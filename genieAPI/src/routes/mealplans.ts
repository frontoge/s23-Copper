import express from "express";
import controller from "../controllers/mealplans"

const router = express.Router();

router.get('/:userID', controller.getMealPlan);

router.post("/", controller.createMealPlan);

router.put('/:owner&:recpieID', controller.updateMealPlan)

router.delete("/:owner&:recpieID", controller.deleteMealPlan)

export = router;
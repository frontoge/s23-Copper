import express from "express";
import controller from '../controllers/recipes';

const router = express.Router();

router.get('/:userID', controller.getRecipe);

router.post("/", controller.addRecipe)


export = router;
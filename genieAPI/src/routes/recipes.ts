import express from "express";
import controller from '../controllers/recipes';

const router = express.Router();

router.get('/:userID', controller.getRecipe);
router.post("/", controller.createRecipe)
router.delete("/:owner&:name", controller.deleteRecipe)
export = router;
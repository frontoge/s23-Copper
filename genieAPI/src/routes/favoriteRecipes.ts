import express from "express";
import controller from "../controllers/favoriteRecipes"

const router = express.Router();

router.get('/:userID', controller.getFavRecipes);
router.post("/", controller.addFavRecipe);
router.delete("/:owner&:recipeid", controller.deleteFavRecipe);

export = router;


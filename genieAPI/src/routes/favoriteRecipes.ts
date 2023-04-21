import express from "express";
import controller from "../controllers/favoriteRecipes"

const router = express.Router();

router.get('/:userID', controller.getFavRecipes);

export = router;


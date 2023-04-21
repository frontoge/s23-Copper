import express from "express";
import controller from "../controllers/favoriteStores"

const router = express.Router();

router.get('/:userID', controller.getFavStores);

export = router;
import express from "express";
import controller from "../controllers/favoriteStores"

const router = express.Router();

router.get('/:userID', controller.getFavStores);
router.post("/", controller.addFavoritestore);

export = router;
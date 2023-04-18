import express from 'express';
import controller from '../controllers/households';

const router = express.Router();

router.get('/:userID', controller.getHousehold);

router.post("/", controller.createHousehold)

export = router;
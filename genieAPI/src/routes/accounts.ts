import express from 'express';
import controller from '../controllers/accounts'

const router = express.Router();

router.get('/:username', controller.getUser);

router.post("/", controller.createUser);

export = router;
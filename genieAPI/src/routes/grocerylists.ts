import express from 'express';
import controller from '../controllers/grocerylists'

const router = express.Router();

router.get('/:userID', controller.getGroceryList)

router.post('/',controller.creategrocerylist)

export = router;
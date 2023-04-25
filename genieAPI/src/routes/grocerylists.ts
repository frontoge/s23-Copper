import express from 'express';
import controller from '../controllers/grocerylists'

const router = express.Router();

router.get('/:userID', controller.getGroceryList)

router.post('/',controller.creategrocerylist)

router.put ('/:owner&:item', controller.updateGrocerylist)

router.delete ('/:owner&:item', controller.deleteGroceylist)

export = router;
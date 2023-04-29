import express from 'express'
import controller from '../controllers/ingredients'

const router = express.Router();

router.get('/:userId', controller.getIngredients);

export = router;
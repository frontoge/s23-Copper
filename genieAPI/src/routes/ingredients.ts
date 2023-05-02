import express from 'express'
import controller from '../controllers/ingredients'

const router = express.Router();

router.get('/:userId', controller.getIngredients);

router.delete('/:userId&:ingredientsId', controller.deleteIngredients)

export = router;
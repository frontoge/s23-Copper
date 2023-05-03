import express from 'express'
import controller from '../controllers/ingredients'

const router = express.Router();

router.get('/:userId', controller.getIngredients);

router.delete('/:userId&:ingredientsId', controller.deleteIngredients)

router.put('/:userId&:ingredientsId', controller.updateIngredients)

router.post('/:userId&:ingredientsId', controller.addIngredients)

export = router;
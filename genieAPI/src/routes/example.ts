import express from 'express';
import controller from '../controllers/example'

const router = express.Router();

router.get('/exampleEndp', controller.exampleEndpoint);

export = router;
import express from 'express';
import controller from '../controllers/example'

const router = express.Router();

router.get('/api/examples/exampleEndp', controller.exampleEndpoint);

export = router;
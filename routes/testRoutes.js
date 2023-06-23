import express from 'express';
import { testPostConntroller } from '../controllers/testController.js';

//router.object
const router = express.Router();

//test
router.post('/test-post', testPostConntroller);


//export
export default router;
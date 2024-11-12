import express from 'express';
import { analyzeUrl } from '../controllers/urlController.js';

const router = express.Router();

router.post('/', analyzeUrl);

export default router;

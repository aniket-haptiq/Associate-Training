import express from 'express';
import { getTopNews, searchNews } from '../controllers/newsController.js';
const router = express.Router();

router.get('/top', getTopNews);
router.get('/search', searchNews);

export default router;

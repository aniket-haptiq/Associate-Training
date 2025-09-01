import express from 'express';
import { getBookmarks, addBookmark, deleteBookmark } from '../controllers/bookmarkController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getBookmarks);
router.post('/', protect, addBookmark);
router.delete('/:id', protect, deleteBookmark);

export default router;

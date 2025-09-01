import { Bookmark } from '../models/index.js';

export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.findAll({ where: { UserId: req.user.id } });
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.create({ ...req.body, UserId: req.user.id });
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    const id = req.params.id;
    await Bookmark.destroy({ where: { id, UserId: req.user.id } });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

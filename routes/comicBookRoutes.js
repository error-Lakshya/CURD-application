// File: routes/comicBookRoutes.js
const express = require('express');
const {
  createComicBook,
  getAllComicBooks,
  getComicBookById,
  updateComicBook,
  deleteComicBook
} = require('../controllers/comicBookController');

const router = express.Router();

// Route to create a new comic book (POST)
router.post('/api/comic-books', createComicBook);

// Route to get all comic books with pagination, filtering, and sorting (GET)
router.get('/api/comic-books', getAllComicBooks);

// Route to get a specific comic book by ID (GET)
router.get('/api/comic-books/', getComicBookById);

// Route to update a specific comic book by ID (PUT)
router.put('/api/comic-books/', updateComicBook);

// Route to delete a comic book by ID (DELETE)
router.delete('/api/comic-books/', deleteComicBook);

module.exports = router;

// File: controllers/comicBookController.js
const comicBookService = require('../services/comicBookService');

// Create a new comic book
exports.createComicBook = async (req, res, next) => {
  try {
    const newComic = await comicBookService.createComicBook(req.body);
    res.status(201).json(newComic);
  } catch (err) {
    next(err);  // Pass errors to the global error handler
  }
};

// Get all comic books with pagination, filtering, and sorting
exports.getAllComicBooks = async (req, res, next) => {
  const { page = 1, limit = 10, sort = 'createdAt', ...filters } = req.query;
  try {
    const comicBooks = await comicBookService.getAllComicBooks(filters, page, limit, sort);
    res.status(200).json(comicBooks);
  } catch (err) {
    next(err);
  }
};

// Get a specific comic book by ID
exports.getComicBookById = async (req, res, next) => {
  try {
    const comicBook = await comicBookService.getComicBookById(req.params.id);
    res.status(200).json(comicBook);
  } catch (err) {
    next(err);
  }
};

// Update a comic book by ID
exports.updateComicBook = async (req, res, next) => {
  try {
    const updatedComic = await comicBookService.updateComicBook(req.params.id, req.body);
    res.status(200).json(updatedComic);
  } catch (err) {
    next(err);
  }
};

// Delete a comic book by ID
exports.deleteComicBook = async (req, res, next) => {
  try {
    const deletedComic = await comicBookService.deleteComicBook(req.params.id);
    res.status(200).json({ message: 'Comic book deleted successfully' });
  } catch (err) {
    next(err);
  }
};

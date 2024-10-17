// File: services/comicBookService.js
const ComicBook = require('../models/comicBookModel');

// Service to create a new comic book
const createComicBook = async (comicBookData) => {
  try {
    const comicBook = new ComicBook(comicBookData);
    return await comicBook.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

// Service to get all comic books with pagination, sorting, and filtering
const getAllComicBooks = async (filters, page, limit, sort) => {
  try {
    const comicBooks = await ComicBook.find(filters)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);
    return comicBooks;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Service to get a comic book by ID
const getComicBookById = async (id) => {
  try {
    const comicBook = await ComicBook.findById(id);
    if (!comicBook) {
      throw new Error('Comic book not found');
    }
    return comicBook;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Service to update a comic book by ID
const updateComicBook = async (id, updateData) => {
  try {
    const updatedComic = await ComicBook.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedComic) {
      throw new Error('Comic book not found');
    }
    return updatedComic;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Service to delete a comic book by ID
const deleteComicBook = async (id) => {
  try {
    const deletedComic = await ComicBook.findByIdAndDelete(id);
    if (!deletedComic) {
      throw new Error('Comic book not found');
    }
    return deletedComic;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createComicBook,
  getAllComicBooks,
  getComicBookById,
  updateComicBook,
  deleteComicBook,
};

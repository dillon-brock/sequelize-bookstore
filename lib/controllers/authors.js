const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const authors = await db.Author.findAll();
      res.json(authors);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const author = await db.Author.findByPk(req.params.id, {
        include: {
          model: db.Book,
          attributes: ['title', 'releaseYear'],
          through: {
            attributes: [],
          },
          include: {
            model: db.Genre,
            attributes: ['genre'],
          },
        },
      });

      if (!author) next();
      res.json(author);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newAuthor = await db.Author.create(req.body);
      res.json(newAuthor);
    } catch (e) {
      next(e);
    }
  })
  .post('/:id/books', async (req, res, next) => {
    try {
      const newBook = await db.Book.create(req.body);
      await db.BookAuthor.create({
        BookId: newBook.id,
        AuthorId: req.params.id,
      });
      res.json(newBook);
    } catch (e) {
      next(e);
    }
  });

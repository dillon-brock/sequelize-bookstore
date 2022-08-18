const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const books = await db.Book.findAll();
      res.json(books);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const book = await db.Book.findByPk(req.params.id, {
        include: {
          model: db.Author,
          as: 'Authors',
        },
      });
      if (!book) next();
      res.json(book);
    } catch (e) {
      next(e);
    }
  });

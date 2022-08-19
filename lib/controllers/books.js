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
        attributes: ['id', 'releaseYear', 'title'],
        include: [
          {
            model: db.Author,
            attributes: ['firstName', 'lastName', 'dob', 'pob'],
            through: {
              attributes: [],
            },
          },
          {
            model: db.Genre,
            attributes: ['genre'],
          },
        ],
      });
      if (!book) next();
      res.json(book);
    } catch (e) {
      next(e);
    }
  });

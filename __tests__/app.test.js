const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('backend-express-template routes', () => {
  beforeEach(async () => {
    // await db.sequelize.sync({ force: true });
    try {
      const queryInterface = db.sequelize.getQueryInterface();
      await queryInterface.bulkDelete('BookAuthors', null, {});
      await queryInterface.bulkDelete('Books', null, {});
      await queryInterface.bulkDelete('Authors', null, {});
      const authors = await db.Author.bulkCreate([
        {
          firstName: 'Neil',
          lastName: 'Gaiman',
          dob: new Date('1960-11-10'),
          pob: 'Portchester, UK',
        },
        {
          firstName: 'Michelle',
          lastName: 'Zauner',
          dob: new Date('1989-03-29'),
          pob: 'Seoul, South Korea',
        },
        {
          firstName: 'Tara',
          lastName: 'Westover',
          dob: new Date('1989-09-27'),
          pob: 'Clifton Idaho',
        },
        {
          firstName: 'Octavia E.',
          lastName: 'Butler',
          dob: new Date('1947-06-22'),
          pob: 'Pasadena, CA',
        },
        {
          firstName: 'Miranda',
          lastName: 'July',
          dob: new Date('1974-02-15'),
          pob: 'Barre, VT',
        },
      ]);
      const books = await db.Book.bulkCreate([
        {
          title: 'American Gods',
          releaseYear: 2001,
        },
        {
          title: 'The Graveyard Book',
          releaseYear: 2008,
        },
        {
          title: 'Crying in H Mart',
          releaseYear: 2021,
        },
        {
          title: 'Educated',
          releaseYear: 2018,
        },
        {
          title: 'Kindred',
          releaseYear: 1979,
        },
        {
          title: 'Parable of the Sower',
          releaseYear: 1993,
        },
        {
          title: 'Xenogenesis',
          releaseYear: 1987,
        },
        {
          title: 'It Chooses You',
          releaseYear: 2011,
        },
        {
          title: 'The First Bad Man',
          releaseYear: 2015,
        },
      ]);
      await db.BookAuthor.bulkCreate([
        {
          BookId: books[0].id,
          AuthorId: authors[0].id,
        },
        {
          BookId: books[1].id,
          AuthorId: authors[0].id,
        },
        {
          BookId: books[2].id,
          AuthorId: authors[1].id,
        },
        {
          BookId: books[3].id,
          AuthorId: authors[2].id,
        },
        {
          BookId: books[4].id,
          AuthorId: authors[3].id,
        },
        {
          BookId: books[5].id,
          AuthorId: authors[3].id,
        },
        {
          BookId: books[6].id,
          AuthorId: authors[3].id,
        },
        {
          BookId: books[7].id,
          AuthorId: authors[4].id,
        },
        {
          BookId: books[8].id,
          AuthorId: authors[4].id,
        },
      ]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
  it('#GET /api/v1/books should get a list of books', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      releaseYear: expect.any(Number),
    });
  });
  it('#GET /api/v1/books/:id should get a book with id matching params and author info', async () => {
    const books = await db.Book.findAll();
    const initialBookId = books[0].id;
    const res = await request(app).get(`/api/v1/books/${initialBookId}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: initialBookId,
      title: 'American Gods',
      releaseYear: 2001,
      Authors: expect.any(Array),
    });
  });
  it('#GET /api/v1/authors should get a list of authors', async () => {
    const res = await request(app).get('/api/v1/authors');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
    });
  });
  it('#GET /api/v1/authors/:id should get an author with id matching params and corresponding books', async () => {
    const authors = await db.Author.findAll();
    const initialAuthorsId = authors[0].id;
    const res = await request(app).get(`/api/v1/authors/${initialAuthorsId}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: initialAuthorsId,
      firstName: 'Neil',
      lastName: 'Gaiman',
      dob: expect.any(String),
      pob: 'Portchester, UK',
      Books: expect.any(Array),
    });
  });
  it('#POST /api/v1/authors should add an author', async () => {
    const newAuthor = {
      firstName: 'Kurt',
      lastName: 'Vonnegut',
      dob: new Date('1922-11-11'),
      pob: 'Indianapolis, IN',
    };
    const res = await request(app).post('/api/v1/authors').send(newAuthor);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      firstName: 'Kurt',
      lastName: 'Vonnegut',
      dob: expect.any(String),
      pob: 'Indianapolis, IN',
    });
  });
  it('#POST /api/v1/authors/:id/books should add a new book that corresponds to author id from params', async () => {
    const newBook = {
      title: 'Dawn',
      releaseYear: 1987,
    };
    const res = await request(app)
      .post('/api/v1/authors/4/books')
      .send(newBook);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      title: 'Dawn',
      releaseYear: 1987,
    });
  });
});

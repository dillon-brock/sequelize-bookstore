const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('backend-express-template routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Author.bulkCreate([
        {
          firstName: 'Neil',
          lastName: 'Gaiman',
          dob: new Date('1960-11-10'),
          pob: 'Portchester, UK',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Michelle',
          lastName: 'Zauner',
          dob: new Date('1989-03-29'),
          pob: 'Seoul, South Korea',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Tara',
          lastName: 'Westover',
          dob: new Date('1989-09-27'),
          pob: 'Clifton Idaho',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Octavia E.',
          lastName: 'Butler',
          dob: new Date('1947-06-22'),
          pob: 'Pasadena, CA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Miranda',
          lastName: 'July',
          dob: new Date('1974-02-15'),
          pob: 'Barre, VT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      await db.Book.bulkCreate([
        {
          title: 'American Gods',
          releaseYear: 2001,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Graveyard Book',
          releaseYear: 2008,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Crying in H Mart',
          releaseYear: 2021,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Educated',
          releaseYear: 2018,
          authorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Kindred',
          releaseYear: 1979,
          authorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Parable of the Sower',
          releaseYear: 1993,
          authorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Xenogenesis',
          releaseYear: 1987,
          authorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'It Chooses You',
          releaseYear: 2011,
          authorId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The First Bad Man',
          releaseYear: 2015,
          authorId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
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
      authorId: expect.any(Number),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  it('#GET /api/v1/books/:id should get a book with id matching params and author info', async () => {
    const res = await request(app).get('/api/v1/books/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      authorId: 1,
      title: 'American Gods',
      releaseYear: 2001,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      Author: expect.any(Object),
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
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  it('#GET /api/v1/authors/:id should get an author with id matching params and corresponding books', async () => {
    const res = await request(app).get('/api/v1/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      firstName: 'Neil',
      lastName: 'Gaiman',
      dob: expect.any(String),
      pob: 'Portchester, UK',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      Books: expect.any(Array),
    });
  });
  it('#POST /api/v1/authors should add an author', async () => {
    const newAuthor = {
      firstName: 'Kurt',
      lastName: 'Vonnegut',
      dob: new Date('1922-11-11'),
      pob: 'Indianapolis, IN',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const res = await request(app).post('/api/v1/authors').send(newAuthor);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      firstName: 'Kurt',
      lastName: 'Vonnegut',
      dob: expect.any(String),
      pob: 'Indianapolis, IN',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
  it('#POST /api/v1/authors/:id/books should add a new book that corresponds to author id from params', async () => {
    const newBook = {
      title: 'Dawn',
      releaseYear: 1987,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const res = await request(app)
      .post('/api/v1/authors/4/books')
      .send(newBook);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      authorId: 4,
      title: 'Dawn',
      releaseYear: 1987,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});

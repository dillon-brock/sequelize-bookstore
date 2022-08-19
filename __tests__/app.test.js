const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('backend-express-template routes', () => {
  beforeEach(async () => {
    try {
      const queryInterface = db.sequelize.getQueryInterface();
      await queryInterface.bulkDelete('BookAuthors', null, {});
      await queryInterface.bulkDelete('Genres', null, {});
      await queryInterface.bulkDelete('Books', null, {});
      await queryInterface.bulkDelete('Authors', null, {});
      const genres = await db.Genre.bulkCreate([
        {
          name: 'Fiction', // id: 1
        },
        {
          name: 'Historical Fiction', // id: 2
        },
        {
          name: 'Non-Fiction', // id: 3
        },
        {
          name: 'Biography', // id: 4
        },
        {
          name: 'Memoir', // id: 5
        },
        {
          name: 'Poetry', // id: 6
        },
        {
          name: 'Short Stories', // id: 7
        },
        {
          name: 'Science Fiction', // id: 8
        },
        {
          name: 'Fantasy', // id: 9
        },
        {
          name: 'Cookbook', // id: 10
        },
        {
          name: 'Reference', // id: 11
        },
      ]);
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
        {
          firstName: 'Chimamanda Ngozi',
          lastName: 'Adichie',
          dob: new Date('1977-09-15'),
          pob: 'Enugu, Nigeria',
        },
        {
          firstName: 'Donna',
          lastName: 'Tartt',
          dob: new Date('1963-12-23'),
          pob: 'Greenwood, MS',
        },
        {
          firstName: 'Anthony',
          lastName: 'Doerr',
          dob: new Date('1973-10-27'),
          pob: 'Cleveland, OH',
        },
        {
          firstName: 'Markus',
          lastName: 'Zusak',
          dob: new Date('1975-06-23'),
          pob: 'Sydney, Australia',
        },
        {
          firstName: 'Frans',
          lastName: 'Pretorious',
          dob: new Date('1973-07-31'),
          pob: 'Johannesburg, South Africa',
        },
        {
          firstName: 'Steven',
          lastName: 'Gubser',
          dob: new Date('1972-05-04'),
          pob: 'Tulsa, OK',
        },
        {
          firstName: 'Doris',
          lastName: 'Kearns Goodwin',
          dob: new Date('1943-01-04'),
          pob: 'New York City, NY',
        },
        {
          firstName: 'Harold',
          lastName: 'Pender',
          dob: new Date('1879-01-13'),
          pob: 'Tarboro, NC',
        },
        {
          firstName: 'Knox',
          lastName: 'McIlwain',
          dob: null,
          pob: null,
        },
        {
          firstName: 'Sylvia',
          lastName: 'Plath',
          dob: new Date('1932-10-27'),
          pob: 'Boston, MA',
        },
        {
          firstName: 'David',
          lastName: 'Chang',
          dob: new Date('1977-08-05'),
          pob: 'Arlington County, VA',
        },
        {
          firstName: 'Peter',
          lastName: 'Meehan',
          dob: null,
          pob: null,
        },
      ]);
      const books = await db.Book.bulkCreate([
        {
          title: 'American Gods',
          releaseYear: 2001,
          GenreId: genres[8].id,
        },
        {
          title: 'The Graveyard Book',
          releaseYear: 2008,
          GenreId: genres[8].id,
        },
        {
          title: 'Crying in H Mart',
          releaseYear: 2021,
          GenreId: genres[4].id,
        },
        {
          title: 'Educated',
          releaseYear: 2018,
          GenreId: genres[4].id,
        },
        {
          title: 'Kindred',
          releaseYear: 1979,
          GenreId: genres[8].id,
        },
        {
          title: 'Parable of the Sower',
          releaseYear: 1993,
          GenreId: genres[7].id,
        },
        {
          title: 'Xenogenesis',
          releaseYear: 1987,
          GenreId: genres[7].id,
        },
        {
          title: 'It Chooses You',
          releaseYear: 2011,
          GenreId: genres[2].id,
        },
        {
          title: 'The First Bad Man',
          releaseYear: 2015,
          GenreId: genres[0].id,
        },
        {
          title: 'The Thing Around Your Neck',
          releaseYear: 2009,
          GenreId: genres[6].id,
        },
        {
          title: 'The Goldfinch',
          releaseYear: 2013,
          GenreId: genres[0].id,
        },
        {
          title: 'All The Light We Cannot See',
          releaseYear: 2014,
          GenreId: genres[1].id,
        },
        {
          title: 'About Grace',
          releaseYear: 2004,
          GenreId: genres[0].id,
        },
        {
          title: 'The Book Thief',
          releaseYear: 2005,
          GenreId: genres[1].id,
        },
        {
          title: 'We Should All Be Feminists',
          releaseYear: 2014,
          GenreId: genres[2].id,
        },
        {
          title: 'The Little Book of Black Holes',
          releaseYear: 2017,
          GenreId: genres[2].id,
        },
        {
          title: 'The Bully Pulpit',
          releaseYear: 2013,
          GenreId: genres[3].id,
        },
        {
          // eslint-disable-next-line quotes
          title: "Electrical Engineers' HandBook",
          releaseYear: 1914,
          GenreId: genres[10].id,
        },
        {
          title: 'The Bell Jar',
          releaseYear: 1963,
          GenreId: genres[5].id,
        },
        {
          title: 'Momofuku',
          releaseYear: 2009,
          GenreId: genres[9].id,
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
        {
          BookId: books[9].id,
          AuthorId: authors[5].id,
        },
        {
          BookId: books[10].id,
          AuthorId: authors[6].id,
        },
        {
          BookId: books[11].id,
          AuthorId: authors[7].id,
        },
        {
          BookId: books[12].id,
          AuthorId: authors[7].id,
        },
        {
          BookId: books[13].id,
          AuthorId: authors[8].id,
        },
        {
          BookId: books[14].id,
          AuthorId: authors[5].id,
        },
        {
          BookId: books[15].id,
          AuthorId: authors[9].id,
        },
        {
          BookId: books[15].id,
          AuthorId: authors[10].id,
        },
        {
          BookId: books[16].id,
          AuthorId: authors[11].id,
        },
        {
          BookId: books[17].id,
          AuthorId: authors[12].id,
        },
        {
          BookId: books[17].id,
          AuthorId: authors[13].id,
        },
        {
          BookId: books[18].id,
          AuthorId: authors[14].id,
        },
        {
          BookId: books[19].id,
          AuthorId: authors[15].id,
        },
        {
          BookId: books[19].id,
          AuthorId: authors[16].id,
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
      GenreId: expect.any(Number),
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
      GenreId: expect.any(Number),
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
    const genres = await db.Genre.findAll();
    const newBook = {
      title: 'Dawn',
      releaseYear: 1987,
      GenreId: genres[7].id,
    };
    const res = await request(app)
      .post('/api/v1/authors/4/books')
      .send(newBook);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      GenreId: expect.any(Number),
      title: 'Dawn',
      releaseYear: 1987,
    });
  });
});

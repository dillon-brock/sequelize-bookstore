'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Books', [
      {
        title: 'American Gods',
        releaseYear: 2001,
        GenreId: 9,
      },
      {
        title: 'The Graveyard Book',
        releaseYear: 2008,
        GenreId: 9,
      },
      {
        title: 'Crying in H Mart',
        releaseYear: 2021,
        GenreId: 5,
      },
      {
        title: 'Educated',
        releaseYear: 2018,
        GenreId: 5,
      },
      {
        title: 'Kindred',
        releaseYear: 1979,
        GenreId: 9,
      },
      {
        title: 'Parable of the Sower',
        releaseYear: 1993,
        GenreId: 8,
      },
      {
        title: 'Xenogenesis',
        releaseYear: 1987,
        GenreId: 8,
      },
      {
        title: 'It Chooses You',
        releaseYear: 2011,
        GenreId: 3,
      },
      {
        title: 'The First Bad Man',
        releaseYear: 2015,
        GenreId: 1,
      },
      {
        title: 'The Thing Around Your Neck',
        releaseYear: 2009,
        GenreId: 7,
      },
      {
        title: 'The Goldfinch',
        releaseYear: 2013,
        GenreId: 1,
      },
      {
        title: 'All The Light We Cannot See',
        releaseYear: 2014,
        GenreId: 2,
      },
      {
        title: 'About Grace',
        releaseYear: 2004,
        GenreId: 1,
      },
      {
        title: 'The Book Thief',
        releaseYear: 2005,
        GenreId: 2,
      },
      {
        title: 'We Should All Be Feminists',
        releaseYear: 2014,
        GenreId: 3,
      },
      {
        title: 'The Little Book of Black Holes',
        releaseYear: 2017,
        GenreId: 3,
      },
      {
        title: 'The Bully Pulpit',
        releaseYear: 2013,
        GenreId: 4,
      },
      {
        // eslint-disable-next-line quotes
        title: "Electrical Engineers' HandBook",
        releaseYear: 1914,
        GenreId: 11,
      },
      {
        title: 'The Bell Jar',
        releaseYear: 1963,
        GenreId: 6,
      },
      {
        title: 'Momofuku',
        releaseYear: 2009,
        GenreId: 10,
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  },
};

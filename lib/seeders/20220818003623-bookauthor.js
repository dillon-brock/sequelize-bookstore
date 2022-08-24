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
    await queryInterface.bulkInsert('BookAuthors', [
      {
        BookId: 1,
        AuthorId: 1,
      },
      {
        BookId: 2,
        AuthorId: 1,
      },
      {
        BookId: 3,
        AuthorId: 2,
      },
      {
        BookId: 4,
        AuthorId: 3,
      },
      {
        BookId: 5,
        AuthorId: 4,
      },
      {
        BookId: 6,
        AuthorId: 4,
      },
      {
        BookId: 7,
        AuthorId: 4,
      },
      {
        BookId: 8,
        AuthorId: 5,
      },
      {
        BookId: 9,
        AuthorId: 5,
      },
      {
        BookId: 10,
        AuthorId: 6,
      },
      {
        BookId: 11,
        AuthorId: 7,
      },
      {
        BookId: 12,
        AuthorId: 8,
      },
      {
        BookId: 13,
        AuthorId: 8,
      },
      {
        BookId: 14,
        AuthorId: 9,
      },
      {
        BookId: 15,
        AuthorId: 6,
      },
      {
        BookId: 16,
        AuthorId: 10,
      },
      {
        BookId: 16,
        AuthorId: 11,
      },
      {
        BookId: 17,
        AuthorId: 12,
      },
      {
        BookId: 18,
        AuthorId: 13,
      },
      {
        BookId: 18,
        AuthorId: 14,
      },
      {
        BookId: 19,
        AuthorId: 15,
      },
      {
        BookId: 20,
        AuthorId: 16,
      },
      {
        BookId: 20,
        AuthorId: 17,
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
    await queryInterface.bulkDelete('BookAuthors', null, {});
  },
};

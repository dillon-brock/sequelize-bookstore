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
        BookId: 1,
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

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
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 1,
        AuthorId: 1,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 3,
        AuthorId: 2,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 4,
        AuthorId: 3,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 5,
        AuthorId: 4,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 6,
        AuthorId: 4,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 7,
        AuthorId: 4,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 8,
        AuthorId: 5,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        BookId: 9,
        AuthorId: 5,
        // createdAt: new Date(),
        // updatedAt: new Date(),
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

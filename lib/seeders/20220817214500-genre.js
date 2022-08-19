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
    await queryInterface.bulkInsert('Genres', [
      {
        genre: 'Fiction', // id: 1
      },
      {
        genre: 'Historical Fiction', // id: 2
      },
      {
        genre: 'Non-Fiction', // id: 3
      },
      {
        genre: 'Biography', // id: 4
      },
      {
        genre: 'Memoir', // id: 5
      },
      {
        genre: 'Poetry', // id: 6
      },
      {
        genre: 'Short Stories', // id: 7
      },
      {
        genre: 'Science Fiction', // id: 8
      },
      {
        genre: 'Fantasy', // id: 9
      },
      {
        genre: 'Cookbook', // id: 10
      },
      {
        genre: 'Reference', // id: 11
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
    await queryInterface.bulkDelete('Genres', null, {});
  },
};

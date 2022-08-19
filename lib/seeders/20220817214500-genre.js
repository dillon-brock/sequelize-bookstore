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

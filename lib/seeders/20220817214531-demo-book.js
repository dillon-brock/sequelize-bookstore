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
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'The Graveyard Book',
        releaseYear: 2008,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Crying in H Mart',
        releaseYear: 2021,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Educated',
        releaseYear: 2018,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Kindred',
        releaseYear: 1979,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Parable of the Sower',
        releaseYear: 1993,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Xenogenesis',
        releaseYear: 1987,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'It Chooses You',
        releaseYear: 2011,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'The First Bad Man',
        releaseYear: 2015,
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
    await queryInterface.bulkDelete('Books', null, {});
  },
};

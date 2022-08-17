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

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

    await queryInterface.bulkInsert('Authors', [
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
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Authors', null, {});
  },
};

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

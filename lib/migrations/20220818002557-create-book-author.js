'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookAuthors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors',
          key: 'id',
        },
      },
      BookId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
        },
      },
      // createdAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE,
      // },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('BookAuthors');
  },
};

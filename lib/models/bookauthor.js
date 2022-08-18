'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  BookAuthor.init(
    {
      AuthorId: DataTypes.INTEGER,
      BookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BookAuthor',
      timestamps: false,
    }
  );
  return BookAuthor;
};

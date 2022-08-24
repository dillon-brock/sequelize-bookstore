'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.hasMany(models.Book, {
        foreignKey: 'GenreId',
      });
    }
  }
  Genre.init(
    {
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Genre',
      createdAt: false,
      updatedAt: false,
    }
  );
  return Genre;
};

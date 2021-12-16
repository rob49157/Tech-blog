
const { Model, DataTypes}= require("sequelize")
const sequelize = require("../config/connection")

class Note extends Model{}


//TABLE
Note.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      definition: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "Note",
    }
  );
  
  module.exports = Note;
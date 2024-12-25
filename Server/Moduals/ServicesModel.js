import { DataTypes } from "sequelize";
import sequelizeDB from "../DatabaseConnection/DbConnection.js";

const ServicesModels = sequelizeDB.define('Services', {
  title: {
    type: DataTypes.STRING, // Changed from TEXT to STRING for validation to work
    allowNull: false,
    validate: {
      isAlpha: true, // `isAlpha` should be in the `validate` object
    },
  },
  list: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      isArray(value) {
        if (!Array.isArray(value)) {
          throw new Error('The list field must be an array.');
        }
      },
    },
  },
});

export default ServicesModels;

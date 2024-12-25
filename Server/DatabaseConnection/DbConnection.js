import { Sequelize } from "sequelize";

// Set up the Sequelize instance
const sequelizeDB = new Sequelize('toursapp', 'root', 'Mysqlkapil@321', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelizeDB;

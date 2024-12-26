import { Sequelize } from "sequelize";

const sequelizeDB = new Sequelize('toursapp', 'root', 'Mysqlkapil@321', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelizeDB;

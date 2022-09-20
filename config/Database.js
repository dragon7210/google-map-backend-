import { Sequelize } from "sequelize";

const db = new Sequelize("delivery", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

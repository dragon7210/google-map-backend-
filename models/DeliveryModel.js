import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Delivery = db.define(
  "dilvery",
  {
    name: {
      type: DataTypes.STRING,
    },
    products: {
      type: DataTypes.STRING,
    },
    position_lat: {
      type: DataTypes.STRING,
    },
    position_lng: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

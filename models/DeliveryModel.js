import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Delivery = db.define(
  "delivery",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    products: {
      type: DataTypes.STRING,
    },
    from_lat: {
      type: DataTypes.STRING,
    },
    from_lng: {
      type: DataTypes.STRING,
    },
    to_lat: {
      type: DataTypes.STRING,
    },
    to_lng: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

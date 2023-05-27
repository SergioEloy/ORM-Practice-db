import { Sequelize } from "sequelize";
import express, { Express } from "express";

const app: Express = express();
app.use(express.json());

export const sequelize = new Sequelize(
  "postgres://postgres:totito12@localhost:5432/short-url"
);

export const Conection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Dentro");
  } catch (error) {
    console.error("Dejame entrar");
    console.error(error);
  }
};

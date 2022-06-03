import { Sequelize } from "sequelize-typescript";
import { Pelicula } from "./models/pelicula.models";
import { Personaje } from "./models/personaje.models";
import { Genero } from "./models/genero.models";

const connection = new Sequelize({
  dialect: "mariadb",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "AlkemyDb",
  logging: false,
  models: [Pelicula, Personaje, Genero],
});

export default connection;
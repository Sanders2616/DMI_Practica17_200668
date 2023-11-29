import { Sequelize, DataTypes } from 'sequelize';
import dotenv from "dotenv"
dotenv.config({path : "src/.env"})

const dbConnection = new Sequelize (
     "dmi_videogame_200668",
     "root",
     "1234",
    {
        host : "localhost",
        port: 3307,
        dialect: "mysql"
    }
)

export default dbConnection;

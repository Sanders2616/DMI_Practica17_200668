import { Sequelize, DataTypes } from 'sequelize';
import dotenv from "dotenv"
dotenv.config({path : "src/.env"})

const dbConnection = new Sequelize (
     "videojuego_200668",
     "admin",
     "1234",
    //process.env.DB_NAME,
    //process.env.DB_USER,
    //process.env.DB_PASSWORD,
    {
        host : "localhost",
        port: "3306",
        dialect: "mysql"
    }
)

export default dbConnection;
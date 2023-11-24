import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Game = dbConnection.define("tbb_game",
{
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    startGame: {
        type: DataTypes.TIME,
        defaultValue: '00:00:00',
        allowNull: true
      },
      endGame: {
        type: DataTypes.TIME,
        defaultValue:'00:02:00',
        allowNull: true,
      },
      score_st: {
        type: DataTypes.FLOAT,
        defaultValue:0.0,
        allowNull: true,
      },
      score_end: {
        type: DataTypes.FLOAT,
        defaultValue:1200.2,
        allowNull: true,
      },
        duracion:{
            type:DataTypes.TIME,
            allowNull:false
        }



}
)  

export default Game;

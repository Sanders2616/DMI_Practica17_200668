import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Game = dbConnection.define("tbb_game",
{
  
      tittle:{
      type:DataTypes.STRING,
      allowNull:false
   },
   startSAt:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue: DataTypes.NOW
   },
   EndsAt:DataTypes.STRING,
   Score:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
   },
   duration:DataTypes.TIME

  })

  export default Game;




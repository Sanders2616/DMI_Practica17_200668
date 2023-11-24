import Player from '../models/Player.js'
import Game from '../models/game.js'
Game.belongsTo(Player);
Player.hasMany(Game,{foreignKey:'player_ID'});

export {Player,Game}
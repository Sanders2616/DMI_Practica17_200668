import Player from '../models/Player.js'
import Game from '../models/game.js'
Game.belongsTo(Player);
Player.hasMany(Game,{foreingKey: 'player_ID'});

export {Player,Game}
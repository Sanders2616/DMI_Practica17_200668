import Jugador from "./models/game.js"

const createGame = async (req, res) => {
    try {
        console.log("Se ha solicitado la creación de un nuevo juego");
        const { title, startGame, endGame, score_st, score_end, duracion } = req.body;
        console.log(req.body);

        const newGame = await Jugador.create(req.body);

        if (newGame) {
            res.status(200).json({
                message: `Se ha creado una nueva partida`
            });
        } else {
            res.status(400).json({
                message: "Hubo un error al intentar crear una partida. Revisa los parámetros."
            });
        }
    } catch (error) {
        console.error("Error al crear un jugador:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar crear al jugador."
        });
    }
};

const findAll = async(rq, rs) =>{
    console.log("Se ha solicitado consulta de todos las partidas");
    const allGames = await Jugador.findAll();
    console.log(allGames);

    if (allGames === null) {
        rs.json({
            messageStatus: `No hay partidas registrados.`
        });
    }else{
        rs.status(200);
        rs.json(allGames);
    }
}

const findGameByID = async (rq, rs) => {
    const gameID = rq.params.gameID
    console.log(`Se ha buscado el juego con el id: ${gameID}`)
    const gameFound = await Jugador.findByPk(gameID)
    if(gameFound === null){
        rs.status(400)
        rs.json({
            messageStatus: `La partida con ID: ${gameID}, no esta esta en la BD`
        });
        console.log(`La partida con ID: ${gameID}, no esta esta en la BD`);
    }else{
        rs.status(200)
        rs.json(gameFound);
    }   
}

const updateGame = async (req, res) => {
    try {
        const gameID = req.params.gameID;
        console.log(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${gameID}`);

        const updatedGame = await Jugador.update(req.body, {
            where: {
                id: gameID
            }
        });

        if (updatedGame[0] === 1) {
            res.status(200).json({
                message: `Se ha actualizado la partida con ID: ${gameID}`
            });
        } else {
            res.status(404).json({
                message: `La partida con ID: ${gameID} no fue encontrado en la base de datos.`
            });
        }
    } catch (error) {
        console.error("Error al actualizar la partida:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar actualizar la paritida."
        });
    }
};

const deleteGame = async (req, res) => {
    try {
        const gameID = req.params.gameID;
        console.log(`Se ha solicitado la eliminación del jugador con ID: ${gameID}`);

        const deletedGameCount = await Jugador.destroy({
            where: {
                id: gameID
            }
        });

        if (deletedPlayerCount === 1) {
            res.status(200).json({
                message: `Se ha eliminado el jugador con ID: ${gameID}`
            });
        } else {
            res.status(404).json({
                message: `El jugador con ID: ${gameID} no fue encontrado en la base de datos.`
            });
        }
    } catch (error) {
        console.error("Error al eliminar el jugador:", error);
        res.status(500).json({
            message: "Hubo un error interno al intentar eliminar el jugador."
        });
    }
};

export {createGame, findGameByID, updateGame, deleteGame, findAll}
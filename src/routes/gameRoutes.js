import  Express  from "express"
import { createGame, findGameByID, updateGame, deleteGame, findAll } from "../controlles/jugadorControlles.js"

const router = Express.Router()

router.post("/newGame", createGame)
router.get("/findOneById/:gameID", findGameByID)
router.get("/findAll", findAll)
router.put("/update/:gameID", updateGame)
router.delete("/deleteGame/:gameID", deleteGame)

export default router

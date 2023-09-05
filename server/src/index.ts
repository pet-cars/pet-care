import rotas from "../rotas"
import express from 'express'
import { Router, Request, Response } from 'express'

const app = express()

const router = Router();

// const useRoute = require("./routes/Form");
app.use(express.json())

// app.use("/Form", useRoute)

router.get('/', (request: Request, response: Response) => {
    console.log('vamo');
    response.json({message: "vai"})
})
app.use('/', rotas())
app.listen(3333, () => "Backend Funcionando")


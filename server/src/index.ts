import rotas from "../rotas"
import express from 'express'
import { Router, Request, Response } from 'express'

const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const router = Router();

// const useRoute = require("./routes/Form");
app.use(express.json())

// app.use("/Form", useRoute)

app.get('/', (request: Request, response: Response) => {
    console.log('vamo');
    response.json({message: "vai"})
})
app.post("/register", (request: Request, response: Response) => {

    const valores = request.body.data;

    mysql.query("INSERT INTO usuario (nome, rg, cpf, email, senha, cep, cidade, bairro, endereco, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", 
        Object.values(valores),
        (error: any, result: any) => {
            if (error) {
                console.log(error);
                
            } else {
                response.send(result);
            }
        })
});
// app.use('/', rotas())
app.listen(3333, () => "Backend Funcionando")


import rotas from "../rotas"
import express from 'express'
import { Router, Request, Response } from 'express'
import {bdConexao} from '../config/banco'

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

    //response.json({message: "Funcionando"})

    try{
        const valores = request.body
        const parametros = [valores.nome, valores.rg, valores.cpf, valores.email, valores.senha, valores.cep, valores.cidade, valores.bairro, valores.endereco, valores.numero, valores.complemento]
        const query = "INSERT INTO cadastro (nome, rg, cpf, email, senha, cep, cidade, bairro, endereco, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) "

        bdConexao.query(query, parametros)
        response.status(200).json({message: "Dados inseridos com sucesso", recebe: valores, valoresReceibdos: valores})
    }
    catch{
        (error: any, result: any) => {
            if (error) {
                console.log(error);
            } else {
                response.send(result);
            }
        }
    }
});
// app.use('/', rotas())
app.listen(3333, () => "Backend Funcionando")


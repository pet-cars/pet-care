import Express, { request }  from "express";
import { Request, Response } from "express";
export const cadastro = async (request:Request, response: Response) =>{

    try {
        console.log("Rota de Cadastro funcionando");
        return response.sendStatus(200).end()
    } catch (error) {
        console.log("Algum erro aconteceu")
        return response.sendStatus(400)
    }
} 
import Express  from "express";

import { cadastro } from "../controller/cadastro";

export default (router: Express.Router) =>{
    router.get('/cadastro', cadastro)
}
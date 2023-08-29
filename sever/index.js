const express = require('express');
const app = express()
//import express from 'express'
// import { Router, Request, Response } from 'express'
 
const useRoute = require("./routes/Form");


//const router = Router()

//app.use(express.json())

app.use("/Form", useRoute)


//2app.use(router)

app.listen(3333, () => {console.log("Backend Funcionando")})
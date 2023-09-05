"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
// const useRoute = require("./routes/Form");
app.use(express_1.default.json());
// app.use("/Form", useRoute)
router.get('/', (request, response) => { console.log('vamo'); });
app.use(router);
app.listen(3333, () => "Backend Funcionando");

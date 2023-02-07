"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const articles_routes_1 = require("./routes/articles.routes");
// import { port } from "../src/utils/constants";
const app = (0, express_1.default)();
const port = 5500;
app.use('/articlepage', articles_routes_1.allarticlesRouter);
app.use('/detailpage', articles_routes_1.getDetailRouter);
app.listen(port, () => {
    console.log(`Connected succesfully on port ${port}`);
});

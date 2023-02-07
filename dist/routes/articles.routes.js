"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailRouter = exports.allarticlesRouter = void 0;
const express_1 = require("express");
// import express from "express"
const articles_controller_1 = __importDefault(require("../controllers/articles.controller"));
const allarticlesRouter = (0, express_1.Router)();
exports.allarticlesRouter = allarticlesRouter;
const getDetailRouter = (0, express_1.Router)();
exports.getDetailRouter = getDetailRouter;
allarticlesRouter.get('/', articles_controller_1.default);
getDetailRouter.get('/', articles_controller_1.default);

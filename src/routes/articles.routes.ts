import  express , { Router} from "express";
// import express from "express"
import getMainController from "../controllers/articles.controller";


const allarticlesRouter=Router();
const getDetailRouter=Router();

allarticlesRouter.get('/',getMainController)
getDetailRouter.get('/',getMainController)

export{allarticlesRouter, getDetailRouter}

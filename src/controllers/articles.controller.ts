
import {Request,Response} from 'express'
import fetcher from "../repositories/fetcher.repository";
import { url } from "../utils/constants";
import ModelMapping from '../services/app.services';
import { Model } from '../models/data.model';

const getMainController = async (req : Request,res : Response) => {
   let middleWareResponse: Model[]=[]
       const {category,search,title} = req.query;
       let response;
       try{
           if(category){
               response = await fetcher(url + `category?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&category=${category}&ctr=5`);
           }
           else if(search){
               response = await fetcher(url + `articles?pagesize=${req.query.pagsize}&page=${req.query.pgNo}&search=${search}&ctr=12`);
           }
           else if(title){
               response = await fetcher(url + `detail?title=${title}`);
           }
           else{
               response = await fetcher(url + `articles?pagesize=${req.query.pagesize}&page=${req.query.pgNo}&ctr=14`);
           }
         //   console.log(response);
           middleWareResponse=ModelMapping(response)
           res.status(200).send(middleWareResponse);
       }
      
       catch(err){
           console.log(err);
       }
   }


   export default getMainController;













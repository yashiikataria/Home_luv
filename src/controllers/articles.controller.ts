
import {Request,Response} from 'express'
import fetcher from "../repositories/fetcher.repository";
import { url } from "../utils/constants";


const getMainController = async (req : Request,res : Response) => {
       const {category,search,title} = req.query;
       let response;
       try{
           if(category){
               response = await fetcher(url + `category?pagesize=${req.query.pagesize}&page=${req.query.page}&category=${category}&ctr=5`);
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
           res.status(200).send(response);
       }
       catch(err){
           console.log(err);
       }
   }


   export default getMainController;













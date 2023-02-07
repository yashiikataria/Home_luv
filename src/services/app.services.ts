import { api } from "../models/api.model";
import { Model } from "../models/data.model";

export default function ModelMapping(data: api[])
 { 
let middleWareResponse: Model[] = [];
     data.map((item: api) => { 
          let mappedData = new Model(item); 
            middleWareResponse.push(mappedData);
         });
          return middleWareResponse;
        }

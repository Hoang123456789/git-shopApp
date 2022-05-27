import axios from "axios";

import *as Config from  '../constant/Config'


export default function callApi( endpoint,method,body){

   
        axios({
          method: method,
          url: `${Config.API_URl}/${endpoint}`,
          data: body
        })   
          .catch((err) => {
            console.log("is not user",err);
          });
  

}
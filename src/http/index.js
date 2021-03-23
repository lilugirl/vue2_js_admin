import axios from 'axios';
import { TOKEN } from '../type/constants';

axios.interceptors.request.use(config=>{
    config.headers['Authroization']='Berear '+window.localStorage.getItem(TOKEN);
    return config;
})

axios.interceptors.response.use(response=>{
   if(response.status===200){
       return response.data;
   }else{
       // TODO: deal with error
       return response;
   }
  
})


export default axios;
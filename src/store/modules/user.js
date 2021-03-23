import { DEFAULT_LANG, DEFAULT_NAME, DEFAULT_ROLE, DEFAULT_TOKEN, LANG, NAME, ROLE, TOKEN } from "../../type/constants";
import {Login} from '../../api/user';
const user={
    state:{
       name:window.localStorage.getItem(NAME)?window.localStorage.getItem(NAME):DEFAULT_NAME,
       role:window.localStorage.getItem(ROLE)?window.localStorage.getItem(ROLE):DEFAULT_ROLE,
       token:window.localStorage.getItem(TOKEN)?window.localStorage.getItem(TOKEN):DEFAULT_TOKEN,
       lang:window.localStorage.getItem(LANG)?window.localStorage.getItem(LANG):DEFAULT_LANG
    },
    mutations:{
      SET_LANG(state,payload){
          state.lang=payload;
          window.localStorage.setItem(LANG,payload);
      },
      SET_TOKEN(state,payload){
          state.token=payload;
          window.localStorage.setItem(TOKEN,payload);
      },
      SET_ROLE(state,payload){
          state.role=payload;
          window.localStorage.setItem(ROLE,payload)
      },
      SET_NAME(state,payload){
          state.name=payload;
          window.localStorage.setItem(NAME,payload);
      }
    },
    actions:{
       login({ commit },payload){
          return new Promise((resolve,reject)=>{
            // mock login process
            Login(payload.username,payload.password).then((res)=>{
                let found=false;
                let user=null;
                res.forEach((item)=>{
                    if(item.username===payload.username && item.password===payload.password){
                        found=true;
                        user=item;
                    }
                })
                if(found){
                    commit('SET_TOKEN',user.token);
                    commit('SET_NAME',user.username);
                    commit('SET_ROLE',user.role);
                    resolve();
                }else{
                    reject('username or password is not match')
                }
              
            }).catch((err)=>reject(err));
          })
          
       },
       logout({commit}){
          return new Promise((resolve)=>{
            commit('SET_TOKEN',DEFAULT_TOKEN);
            commit('SET_NAME',DEFAULT_NAME);  
            resolve();  
          })    
       }
    }

}
export default user;
import { DEFAULT_LANG, DEFAULT_NAME, DEFAULT_ROLE, DEFAULT_TOKEN, LANG, NAME, ROLE, TOKEN } from "../../type/constants";

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
            if(payload.username==='admin' && payload.password==='admin'){
                commit('SET_TOKEN',payload.token);
                commit('SET_NAME',payload.username);
                commit('SET_ROLE','Admin')
                resolve()
               }else{
                  reject('username or password error')
               }
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
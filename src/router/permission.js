import { TOKEN } from '../type/constants';
import router from './index';

const whiteList=[
    "Login"
];

router.beforeEach((to,from,next)=>{
    if(whiteList.includes(to.name)){
        next();
    }else{
        if(to.meta && to.meta.needLogin && !window.localStorage.getItem(TOKEN)){
            next({path:'/auth/login'})
        }else{
            next();
        }
    }
})


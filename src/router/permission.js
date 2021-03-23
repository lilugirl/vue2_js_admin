
import router from './index';
import store from '../store';

const whiteList=[
    "Login"
];

router.beforeEach((to,from,next)=>{
    if(whiteList.includes(to.name)){
        next();
    }else{
        if(to.meta && to.meta.roles ){
            if(! store.state.user.role || !store.state.user.token){
                next({path:'/auth/login'})
            }else if( !to.meta.roles.includes(store.state.user.role)){
                alert('you do not have the access right');
                if(from.name !==to.name && from.name !=='Login'){
                    next({path:from.path})
                }else{
                    next({path:'/'})
                }
                
            }else{
                next();
            }
           
        }else{
            next();
        }
    }
})


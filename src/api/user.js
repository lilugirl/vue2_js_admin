import $http from '../http';
export const Login=({username,password})=>{
    console.log(username,password);
    return $http.get('http://localhost:5000/user');
}


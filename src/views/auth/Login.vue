<template>
  <div>
      <h2>Login</h2>
      <p>Tips: username is admin ,password is admin</p>
     
          <input v-model="username" type="text" placeholder="username" /> 
          <input v-model="password" type="password" placeholder="password" /> 
          <button @click="onLogin">{{$t("message.login")}}</button>
     
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
export default {
    data(){
     return {
         username:'',
         password:''
     }
    },
  
  methods:{
      ...mapActions(['login']),
      onLogin(){
        this.login({username:this.username,password:this.password,token:'faketoken'}).then(()=>{
            alert('login successfully');
            window.location.href="/"
        }).catch(error=>alert(error))
      }
  }
}
</script>

<style>

</style>
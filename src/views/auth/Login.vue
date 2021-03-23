<template>
  <div>
      <h2>Login</h2>
      <p>Tips: 
        <ul>
          <li>run `npm run json-server`  to set up the mock api first </li>
          <li>username: admin,password: admin</li>
        </ul>
      </p>
     
          <a-input v-model="username" type="text" placeholder="username" /> 
          <a-input v-model="password" type="password" placeholder="password" /> 
          <a-button type="primary" @click="onLogin">
            {{$t("message.login")}}
          </a-button>
     
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
            this.$router.push('/');
        }).catch(error=>alert(error))
      }
  }
}
</script>

<style>

</style>
<template>
  <div id="layout_admin">
    <header>{{$store.state.user.name}} {{ $t("message.hello") }} <span><locale-change></locale-change></span> <button @click="onLogout">{{ $t("message.logout") }}</button></header>
    <aside> <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link> 
        </li>
        <li>
          <router-link to="/user">User</router-link>
        </li>
        <li>
          <router-link to="/product">Product</router-link>
        </li>
      </ul>
     
      
     
    </div></aside>
    <main><router-view/></main>
    <footer>copyright 2021</footer>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import LocaleChange from '../components/LocaleChange.vue';
import './AdminLayout.scss';
export default {
  components:{
    LocaleChange
    
  },
  mounted(){
  
  },
  methods:{
    ...mapActions(['logout']),
    onLogout(){
      this.logout().finally(()=>{
        this.$router.push('/auth/login');
      })
      
    }
  }
}
</script>


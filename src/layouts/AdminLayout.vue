<template>
  <div id="layout_admin">
    <a-layout >
      <a-layout-sider  v-model="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <a-icon type="home" />
            <span><router-link to="/home">Home</router-link></span>
           
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="user" />
            <span><router-link to="/user">User</router-link></span>
           
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="project" />
            <span><router-link to="/product">Product</router-link></span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
           <div class="flex-2">{{$store.state.user.name}} {{ $t("message.hello") }}</div>
           <div class="flex-1 right"><locale-change /><a-button @click="onLogout" type="link">{{ $t("message.logout") }}</a-button></div> 
         </a-layout-header>
        <a-layout-content>
          <router-view/>
      
        </a-layout-content>
        <a-layout-footer>
          Copyright ©2021 
        </a-layout-footer>
       
      </a-layout>
       
    </a-layout>
   
   
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import LocaleChange from '../components/LocaleChange.vue';
import './AdminLayout.scss';

export default {
  components:{
    LocaleChange,
  
    
  },
  data() {
    return {
      collapsed: false,
    };
  },
  mounted(){
  
  },
  methods:{
    ...mapActions(['logout']),
    goto(url){
      console.log('url',url);
      this.$router.push(url);
    },
    onLogout(){
      this.logout().finally(()=>{
        this.$router.push('/auth/login');
      })     
    }
  }
}
</script>


<template>
  <div id="layout_admin">
    <a-layout  style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span><router-link to="/user">User</router-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span><router-link to="/product">Product</router-link></span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background:#fff"><span>{{$store.state.user.name}} {{ $t("message.hello") }} <span><locale-change></locale-change></span> <button @click="onLogout">{{ $t("message.logout") }}</button></span></a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
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
    LocaleChange
    
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
    onLogout(){
      this.logout().finally(()=>{
        this.$router.push('/auth/login');
      })
      
    }
  }
}
</script>


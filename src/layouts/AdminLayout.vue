<template>
  <div>
    <header>{{$store.state.user.name}} {{ $t("message.hello") }} <span><locale-change></locale-change></span> <button @click="logout">{{ $t("message.logout") }}</button></header>
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

import LocaleChange from '../components/LocaleChange.vue';
export default {
  components:{
    LocaleChange
    
  },
  mounted(){
    console.log('this.$store',this.$store)
  },
  methods:{
    logout(){
      this.$router.push('/auth/login');
    }
  }
}
</script>

<style>

</style>
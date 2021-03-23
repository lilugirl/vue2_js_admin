<template>
  <div>
    <header>Welcome to dashboard  <button @click="logout">登出</button></header>
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
export default {
  methods:{
    logout(){
      this.$router.push('/auth/login');
    }
  }
}
</script>

<style>

</style>
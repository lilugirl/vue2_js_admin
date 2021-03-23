<template>
  <div>Login
      <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods:{
      login(){
         this.$router.push('/');
      }
  }
}
</script>

<style>

</style>
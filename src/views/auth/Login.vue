<template>
  <div>Login
      <button @click="login">{{ $t("message.login") }}</button>
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
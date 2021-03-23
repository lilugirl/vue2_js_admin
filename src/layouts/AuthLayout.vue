<template>
  <div>
    <locale-change></locale-change>
    <router-view/>
  </div>
</template>

<script>
  import LocaleChange from '../components/LocaleChange.vue'
export default {
  components:{
      LocaleChange
  }
}
</script>

<style>

</style>
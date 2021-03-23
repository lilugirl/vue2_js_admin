<template>
  <div>
    {{ $t("message.changeLang") }}
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return {
        langs: ['zh', 'en']
    }
  },
  mounted(){
      console.log('$i18n',this.$i18n);
  }
}
</script>

<style>

</style>
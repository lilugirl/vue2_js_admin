<template>
  <span>
    {{ $t("message.changeLang") }}
    <a-select :default-value="$i18n.locale" @change="onSelect" style="width:100px">
      <a-select-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">{{ lang.label }}</a-select-option>
    </a-select>
  </span>
</template>

<script>
import {  LANGS } from "../type/constants";
import {mapMutations} from "vuex";

export default {
  data(){
    return {
        langs:LANGS
    }
  },

  methods:{
      ...mapMutations(['SET_LANG']),
      onSelect(value){
          console.log('on select value',value);
          this.$i18n.locale=value;
          this.SET_LANG(value);
      }
  }
}
</script>

<style>

</style>
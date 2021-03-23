<template>
  <div>
    {{ $t("message.changeLang") }}
    <select v-model="$i18n.locale" @change="onSelect">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">{{ lang.label }}</option>
    </select>
  </div>
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
  mounted(){
     
  },
  methods:{
      ...mapMutations(['SET_LANG']),
      onSelect(e){
          this.SET_LANG(e.target.value);
      }
  }
}
</script>

<style>

</style>
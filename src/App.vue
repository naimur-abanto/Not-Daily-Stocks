<template><router-view> </router-view></template>

<script lang="TS">
import { defineComponent } from "vue";
import {storeToRefs} from "pinia"
export default defineComponent({
  name: "App",

});
</script>

<style>
html,
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
</style>

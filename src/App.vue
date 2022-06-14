<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>    
</template>

<script lang="ts">
import { defineComponent, registerRuntimeCompiler } from 'vue';
import TheHeader from './components/TheHeader.vue'
import LandingPageBody from './components/LandingPageBody.vue'
import TheFooter from  './components/TheFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
});
</script>

<style>
  body{
    height: 101vh;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    /* background-image: url('@/assets/background.png'); */
    /* background-size: 281px 384px ; */
    background-image: url('@/assets/landing.png');
    background-repeat: no-repeat;
    background-position-x: right;
    background-attachment: fixed;
    background-size: 550px 750px;
    
  }

  /* .background-image-fixed{
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
} */
  /* .landing-page-body{
    background-blend-mode;
    margin: 0 1.5 0 1.5;
  } */

</style>



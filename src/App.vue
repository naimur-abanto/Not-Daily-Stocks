<template>

  <the-header></the-header>
  <!-- <img class="backgrounf-image-fixed" src="@/assets/background.png" alt="" srcset=""> -->
  <landing-page-body></landing-page-body>
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
    LandingPageBody,
    TheFooter
  }
});
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    background-image: url('@/assets/background.png');
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: 281px 384px ;
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



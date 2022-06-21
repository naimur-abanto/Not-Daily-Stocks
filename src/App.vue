<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
  },
});
</script>

<style>
html,
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
  /* max-height: 100vh; */
}

/* div {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
} */
/* body{
    height: 101vh;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

  } */

/* main{
    margin: 0;
    padding: 0;
    background-image: url('@/assets/landing.png');
    background-repeat: no-repeat;
    background-position-x: right;
    background-attachment: fixed;
    background-size: 550px 750px;
  } */

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

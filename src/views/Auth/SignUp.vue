<template>
  <div>
    <h3>Sign up</h3>
    <card-sign></card-sign>
  </div>
  <div class="after-buttons">
    Have an account already?<router-link to="LogIn">Log In</router-link>
  </div>
  <the-footer class="foo"></the-footer>
</template>

<script lang="ts">
import CardSign from "@/components/CardSign.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    CardSign,
    TheFooter,
  },
};
</script>

<style scoped>
.foo {
  transform: translateY(190px) !important;
}
a {
  list-style: none;
  text-decoration: none;
  color: #fe4642;
  font-weight: bold;
}
.after-buttons {
  text-align: center;
}
h3 {
  text-align: center;
}
</style>

<template>
  <div class="footer-combined">
    <div class="upper">
      <div class="left">
        <router-link to="/privacy">Privacy</router-link>
        <router-link to="/terms">Terms</router-link>
      </div>
      <div v-if="isLogged" class="right">
        <router-link class="border-4" to="/user/contact"
          >Contact us</router-link
        >
      </div>
    </div>
    <div class="lower">© 2022 Daily Stocks, all rights reserved</div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    const { isLogged } = storeToRefs(userStore);

    return {
      isLogged,
    };
  },
};
</script>

<style scoped>
.footer-combined {
  margin: 0;
  padding: 0;
  transform: translateY(76vh);
  bottom: 0%;
  width: 100%;
  height: 7.5em;
  display: grid;
  grid-auto-rows: 1fr;
}
.upper {
  background-color: #ff6b68;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lower {
  text-align: center;
  margin: 1em;
  align-items: center;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin: 0 0.75em;
}
</style>

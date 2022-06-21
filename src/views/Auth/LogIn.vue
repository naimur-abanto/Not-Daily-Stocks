<template>
  <div>
    <img src="@/assets/logowt.png" alt="" />
    <h3>Log in</h3>
    <div class="button-holder">
      <card-sign></card-sign>
    </div>
  </div>
  <div class="after-buttons">
    New to Daily Stocks? <router-link to="SignUp"> Sign Up</router-link>
  </div>
</template>

<script lang="ts">
import CardSign from "@/components/CardSign.vue";
export default {
  components: {
    CardSign,
  },
};
</script>

<style scoped>
img {
  width: 540px;
}
h3 {
  width: 30vw;
  padding: 8px 0;
  background: #e6e6e6;
  text-align: center;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
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
</style>

<template>
  <div>
    <img src="@/assets/logowt.png" alt="Daily Stocks" />
    <h3>Log in</h3>
    <div class="button-holder">
      <card-sign></card-sign>
      <button v-if="buttonGone" @click="clicked()">Continue with Email</button>
      <login-form v-if="!isHidden"></login-form>
    </div>
  </div>
  <div class="after-buttons">
    New to Daily Stocks? <router-link to="SignUp"> Sign Up</router-link>
  </div>
</template>

<script lang="TS">
import CardSign from "@/components/CardSign.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  components: {
    CardSign,
    LoginForm,
  },

  data() {
    return {
      isHidden: true,
      buttonGone:true
    };
  },

  methods: {
    clicked() {
      this.isHidden = !this.isHidden;
      this.buttonGone = !this.buttonGone;
    },
  },
};
</script>

<style scoped>
button {
  height: 48px;
  width: 405px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5em;
  cursor: pointer;
  background: white;
  border: 1px solid #cccccc;
  color: black;
  transform: translateY(-10px);
}

.button-holder {
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}
img {
  width: 540px;
}
h3 {
  width: 30vw;
  padding: 8px 0;
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
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
}
</style>

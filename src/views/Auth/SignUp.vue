<template>
  <div>
    <img src="@/assets/logowt.png" alt="" />
    <h3>Sign up</h3>
    <div class="button-holder">
      <card-sign></card-sign>
      <button v-if="buttonGone" @click="onSubmit()">Contunue with Email</button>
      <signup-form v-if="!isHidden"></signup-form>
    </div>
  </div>
  <p>
    To create your account, Google or Facebook will share your name, email
    address and profile picture with Daily Stocks. By signing up, you accept
    Daily Stocks's
    <router-link to="/TermsDetails">Terms of use</router-link> and
    <router-link to="/PrivacyDetails">Privacy policy.</router-link>
  </p>
  <div class="after-buttons">
    Have an account already?<router-link class="to-login" to="LogIn"
      >Log In</router-link
    >
  </div>
</template>

<script lang="TS">
import CardSign from "@/components/CardSign.vue";
import SignupForm from "@/components/SignupForm.vue";
export default {
  components: {
    CardSign,
    SignupForm,
  },

  data() {
    return {
      isHidden: true,
      buttonGone: true
    };
  },

  methods: {
    onSubmit() {
      this.isHidden = !this.isHidden;
      this.buttonGone = !this.buttonGone
    },
  },
};
</script>

<!-- TODO: move signup to side -->

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

.button-holder {
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.after-buttons {
  text-align: center;
}

h3 {
  text-align: center;
}
p {
  font-size: 12px;
  color: #606060;
  width: 405px;
  text-align: center;
  margin: 2em auto;
  line-height: 1.5;
}
.after-buttons {
  text-align: center;
}

a {
  text-decoration: none;
  color: rebeccapurple;
}
.to-login {
  list-style: none;
  text-decoration: none;
  color: #fe4642;
  font-weight: bo;
}
</style>

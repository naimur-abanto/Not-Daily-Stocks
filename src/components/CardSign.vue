<template>
  <div class="button-holders">
    <button class="fb">Continue with Facebook</button>
    <button>Continue with Google</button>
    <button @click="showForm()">Continue with Email</button>
    <email-form v-if="isActive"></email-form>
  </div>
  <p>
    To create your account, Google or Facebook will share your name, email
    address and profile picture with Daily Stocks. By signing up, you accept
    Daily Stocks's
    <router-link to="/TermsDetails">Terms of use</router-link> and
    <router-link to="/PrivacyDetails">Privacy policy.</router-link>
  </p>
</template>

<script>
import EmailForm from "@/components/SignupForm.vue";
export default {
  components: {
    EmailForm,
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    showForm() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.button-holders {
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin: auto;
  align-items: center;
  padding-bottom: 0.75em;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

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
}
.fb {
  background: #1877f2;
  color: white;
}
.fb:hover {
  background: #1877d0;
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
</style>

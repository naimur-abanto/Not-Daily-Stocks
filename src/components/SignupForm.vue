<template>
  <div>
    <label for="email"> </label>
    <input
      @blur="v$.email.$touch"
      id="email"
      type="text"
      placeholder="Your email"
      v-model="email"
      name=""
    />
    <div v-if="v$.email.$error">
      <p class="warning">Email field has an error.</p>
    </div>
    <input
      @blur="v$.password.$touch"
      type="password"
      placeholder="Password"
      v-model="password"
      name=""
    />
    <div v-if="v$.password.$error">
      <p class="warning">Password length needs to be atleast 8.</p>
    </div>
    <input
      @blur="v$.confirmPassword.$touch"
      type="password"
      placeholder="Confirm Password"
      v-model="confirmPassword"
      name=""
      id=""
    />
    <div v-if="v$.confirmPassword.$error">
      <p class="warning">Passwords did not match</p>
    </div>

    <button class="sbmt" @click="addUser">Sign Up</button>
  </div>
</template>

<script lang="TS">
import { ref } from 'vue'
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import {useUserStore} from "@/stores/user"

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    // expose to template and other options API hooks
    const userStore = useUserStore();

    const {addUser} = userStore

    return {
      email,
      password,
      confirmPassword,
      v$: useVuelidate(),
      addUser
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAs: sameAs(this.password) },

    };
  },
};
</script>

<style scoped>
.warning {
  padding: 5px;
  border: thin solid gray;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform: translateY(-2em);
  margin-bottom: 0;
}
.sbmt {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}
p {
  color: red;
  padding: 0;
}
input {
  background-color: bisque;
  width: 380px;
  margin-bottom: 1em;
  height: 3em;
  padding: 0.5em;
  border: 2px solid grey;
  border-radius: 10px;
}
div {
  display: flex;
  flex-direction: column;
}

button {
  background-color: #fe4642;
  cursor: pointer;
  height: 48px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  background: #fe4642;
  color: white;
  border: none;
  border-radius: 10px;
  border: 2px solid #fe4647;
  font-size: 12;

  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
button:hover {
  box-shadow: none;
  background: #fe4647;
}
</style>

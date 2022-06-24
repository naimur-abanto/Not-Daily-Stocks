<template>
  <div>
    <label for="email"> {{ e1 }}</label>
    <input
      @blur="v$.emailAddress.$touch"
      id="email"
      type="text"
      placeholder="Your email"
      v-model="emailAddress"
      name=""
    />
    <div v-if="v$.emailAddress.$error">
      <p class="warning">Invalid email address</p>
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

    <button class="sbmt" @click="submitForm">Log in</button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ref, methods } from "vue";
import { useUserStore } from "@/stores/user";
export default {
  setup() {
    const userStore = useUserStore();
    const { authUser } = userStore;
    const emailAddress = ref("");
    const password = ref("");
    const rules = {
      emailAddress: { required, email },
      password: { required },
    };
    const v$ = useVuelidate(rules, { emailAddress, password });
    return {
      emailAddress,
      password,
      v$,
      authUser,
    };
  },
  methods: {
    submitForm() {
      // this.v$.$validate();
      // if (!this.v$.$error) {
      // this.authUser(this.emailAddress, this.password);
      this.authUser(this.emailAddress, this.password);
      // } else {
      // alert("Not YEiii");
      // }
    },
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
  background: rgb(234, 234, 234);
  width: 380px;
  margin-bottom: 1em;
  height: 3em;
  padding: 0.5em;
  border: 2px solid grey;
  border-radius: 10px;
}

input:hover {
  background: rgb(189, 189, 189);
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

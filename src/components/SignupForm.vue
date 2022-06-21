<template>
  <div>
    <label for="email"> {{ e1 }}</label>
    <input
      @blur="check"
      id="email"
      type="text"
      placeholder="Your email"
      v-model="email"
      name=""
    />
    <div v-if="v$.email.$error"><p>! Email field has an error.</p></div>
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      name=""
      id=""
    />
    <div v-if="v$.password.$error">
      <p>! Password length needs to be atleast 8.</p>
    </div>
    <input
      type="password"
      placeholder="Confirm Password"
      v-model="confirmPassword"
      name=""
      id=""
    />
    <div v-if="v$.confirmPassword.$error"><p>! Passwords did not match</p></div>

    <button @click="submitF">Sign Up</button>
  </div>
</template>

<script lang="TS">
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
      confirmPassword: "",
      warningMessage: "",
      error: "",
      e1: ""
    };
  },

  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAs: sameAs(this.password) },

    };
  },
  computed:{


    // mail(){
    //   if(this.v$.email.$error){
    //     this.e1 = "not a valid email"
    //   }
    //   else{
    //     this.e1= ""
    //   }
    //   return this.e1
    // }
  },

  methods: {
    submitForm() {
      this.v$.$valiadte();
      if (!this.v$.$error) {
        alert("SignUp successful");
      } else {
        alert("All fields are required");
      }

      // console.log(this.v$)



    },
  },
};
</script>

<style scoped>
input {
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

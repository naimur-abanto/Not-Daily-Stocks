<template>
  <div>
    <!-- Email address -->
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
      <p class="warning">{{ v$.email.$error.$message }}</p>
    </div>
    <!-- First name -->
    <label for=""></label>
    <input @blur="v$.firstname.$touch" v-model="firstname" type="text" />
    <div v-if="v$.firstname.$error">
      <p class="warning">First name required.</p>
    </div>
    <!-- Lastname -->
    <label for=""></label>
    <input type="text" @blur="v$.lastname.$touch" v-model="lastname" />
    <div v-if="v$.lastname.$error">
      <p class="warning">Last name required.</p>
    </div>
    <!-- Password-->
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
    <!-- Confirm password -->
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
    <!-- Button -->
    <button
      class="sbmt"
      @click="addPerson({ email, firstname, lastname, password })"
    >
      Sign Up
    </button>

    <p v-for="error of v$.$errors" :key="error.$uid">
      <strong>{{ error.$validator }}</strong>
      <small> on property</small>
      <strong>{{ error.$property }}</strong>
      <small> says:</small>
      <strong>{{ error.$message }}</strong>
    </p>
  </div>
</template>

<script lang="TS">
import { ref,computed } from 'vue'
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import {useUserStore} from "@/stores/user"


export default {
  setup() {


    const email = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    // expose to template and other options API hooks
    const userStore = useUserStore();
    const {addPerson} = userStore
    const rules = computed(() => ({
      email: {
        required,
        email
      },
      firstname: {
        required
      },
      lastname: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword:{
        required,
        sameAs: sameAs(password)
      }
    }))

    const v$ = useVuelidate(rules, { name, firstname, lastname, password, confirmPassword })

    // function submitForm(params) {

    // }

    return {
      email,
      firstname,
      lastname,
      password,
      confirmPassword,
      v$,
      // v$: useVuelidate(),
      addPerson
    };
  },
  // validations() {
  //   return {
  //     email: { required, email },
  //     firstname: {required},
  //     lastname: {required},
  //     password: { required, minLength: minLength(8) },
  //     confirmPassword: { required, sameAs: sameAs(this.password) },
  //   };
  // },
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
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
button:hover {
  box-shadow: none;
  background: #fe4647;
}
</style>

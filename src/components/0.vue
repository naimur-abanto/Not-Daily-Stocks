<template>
  <div id="app">
    <form @submit.prevent="submit">
      <div>
        <label for="firstName">First Name</label>
        <input
          aria-describedby="firstNameError"
          type="text"
          id="firstName"
          name="firstName"
          ref="firstName"
          :invalid="$v.firstName.$error"
          v-model="$v.firstName.$model"
        />
        <p v-if="$v.firstName.$error" aria-live="assertive" id="firstNameError">
          This field is required
        </p>
      </div>

      <div>
        <label for="lastName">Last Name</label>
        <input
          aria-describedby="lastNameError"
          type="text"
          id="lastName"
          name="lastName"
          ref="lastName"
          v-model="$v.lastName.$model"
        />
        <p v-if="$v.lastName.$error" aria-live="assertive" id="lastNameError">
          This field is required
        </p>
      </div>

      <div>
        <label for="email">Email</label>
        <input
          aria-describedby="emailError"
          type="email"
          id="email"
          name="email"
          ref="email"
          v-model="email"
          @change="$v.email.$touch"
        />
        <p v-if="$v.email.$error" aria-live="assertive" id="emailError">
          {{ email }} doesn't seem to be a valid email
        </p>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  validations: {
    firstName: { required },
    lastName: { required },
    email: { email },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.v$.$error) {
        alert("yei");
      } else {
        alert("niet");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

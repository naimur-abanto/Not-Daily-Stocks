<template>
  <input v-model="email" type="text" name="" id="" />
  <div>not a valid email address</div>
  <input v-model="password" type="password" name="" id="" />
  <button @click="submitForm"></button>
</template>

<script lang="TS">
import useValidate from @vuelidate/core
import {required, email} from @vuelidate/validators
export default{
    data(){
        return{
            v$: useValidate()
            email: "",
            password: ""
        }
    },

    validations(){
        return{
            email: {required, email},
            password: {required}
        }
    },

    computed:{
        submitDorm(){
            this.v$.validate()

        }
    },

    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                alert("SignUp successful");
            } else {
                alert("All fields are required");
            }
        },
    }
}
</script>

<style>
input {
  width: 405px;
  margin-bottom: 1em;
  height: 3em;
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
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  padding: 10px 10px;
  background: #fe4642;
  color: white;
  /* height: 40px;
            width: 80px; */
  border: none;
  border-radius: 10px;
  font-size: 12;
}
</style>

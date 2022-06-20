<template>
  <div>
    <input type="text" placeholde="Your email" v-model="email" name="" id="" />
    <input
      type="password"
      placeholde="Password"
      v-model="password"
      name=""
      id=""
    />
    <input
      type="password"
      placeholde="Confirm Password"
      v-model="confirmPassword"
      name=""
      id=""
    />

    <button>Sign Up</button>
  </div>
</template>

<script lang="ts">
// let email: string;
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>

<style>
input {
  width: 405px;
  margin-bottom: 1em;
  height: 2em;
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

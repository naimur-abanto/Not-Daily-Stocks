<template>
  <div class="button-holders">
    <button class="fb">Continue with Facebook</button>
    <button>Continue with Google</button>
  </div>
</template>

<style scoped>
.button-holders {
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin: auto;
  align-items: center;
  padding-bottom: 0.75em;
}

button {
  height: 48px;
  width: 405px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1em;
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

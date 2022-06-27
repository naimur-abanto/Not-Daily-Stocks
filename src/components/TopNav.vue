<template>
  <header>
    <router-link to="/">
      <img class="logo" src="@/assets/logo.png" alt="" />
    </router-link>
    <div v-if="!isLogged">
      <router-link class="sign-in-button" to="/Auth/LogIn">
        Sign In
      </router-link>
    </div>
    <h3 v-if="isLogged">{{ currentUser.firstname }}</h3>
  </header>
</template>

<script lang="TS">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.ts'
export default{
  setup(){
    const userStore = useUserStore()
    const {isLogged} = storeToRefs(userStore)
    const {currentUser} = storeToRefs(userStore)
    return{
      isLogged,
      currentUser
    }
  }
}
</script>

<style scoped>
header {
  height: 64px;
  display: flex;
}

.logo {
  width: 100px;
  padding: 20px;
  padding-top: 40px;
}
.sign-in-button {
  list-style: none;
  text-decoration: none;
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

.sign-in-button:hover {
  background: #ff655a;
  cursor: pointer;
}

@media screen and (min-width: 640px) {
  header {
    max-height: calc(64px - 1em);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5em 2.5em 0.5em 2.5em;
    padding: 0;
  }
}

@media screen and (max-width: 639px) {
  header {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    width: 100vw;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

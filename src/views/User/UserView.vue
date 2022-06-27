<template>
  <user-nav></user-nav>
  <router-view></router-view>
</template>

<script lang="TS">
import UserNav from "@/components/TopNav.vue";
export default{
  components:{
    UserNav
  }
}
</script>

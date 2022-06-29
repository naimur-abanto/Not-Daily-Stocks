<template>
  <top-nav></top-nav>
  <router-view></router-view>
</template>

<script lang="TS">
import TopNav from '@/components/TopNav.vue'

export default{
  components: {
    TopNav
  }
}
</script>
<style scoped>
.auth {
  transform: translateY(-17em);
}
</style>

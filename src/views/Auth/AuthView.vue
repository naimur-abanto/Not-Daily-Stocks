<template>
  <secondary-header></secondary-header>
  <router-view></router-view>
</template>

<script lang="TS">
import SecondaryHeader from '@/components/SecondaryNav.vue'

export default{
  components: {
    SecondaryHeader
  }
}
</script>
<style scoped>
.auth {
  transform: translateY(-17em);
}
</style>

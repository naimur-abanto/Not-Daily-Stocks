<!-- <template><router-view> </router-view></template> -->
<template>
  <h2>{{ counter }}</h2>
  <button @click="addOne">Click</button>
</template>

<script lang="TS">
import { defineComponent } from "vue";
import {storeToRefs} from "pinia"
import {useCounterStore} from "@/stores/counter.ts"

export default defineComponent({
  name: "App",
  setup() {
    const counterStore = useCounterStore()
    const {counter} = storeToRefs(counterStore)
    const {addOne} = counterStore

    return {
      counter,
      addOne
    }
  }
});
</script>

<style>
html,
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
</style>

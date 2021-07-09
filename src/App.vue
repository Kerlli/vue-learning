<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter/>
  <Binding/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import Binding from './components/Binding.vue'

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    Binding,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

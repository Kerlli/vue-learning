<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter/>
  <Binding/>
  <Parent/>
  <h3>VModel Input</h3>
  <VModelInput v-model="searchText"/>
  <pre>VModel Input Text: {{ searchText }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import Binding from './components/Binding.vue'
import Parent from './components/Parent.vue'
import VModelInput from './components/VModelInput.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      searchText: '',
    }
  },
  components: {
    Counter,
    Binding,
    Parent,
    VModelInput,
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

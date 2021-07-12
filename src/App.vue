<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter/>
  <Binding/>
  <Parent/>
  <h3>VModel Input</h3>
  <VModelInput v-model="searchText"/>
  <pre>VModel Input Text: {{ searchText }}</pre>
  <SelectDemo @change="onSelectChange"/>
  <pre>You selected: {{ currentSelected }}</pre>
  <h3>No Inherit Attr DatePicker</h3>
  <NoInheritAttr data-status="activated" />
  <h3>Batch v-model</h3>
  <BatchModel v-model:first-name.trim.capitalize="firstName" v-model:last-name.trim.capitalize="lastName" />
  <pre>{{ `${firstName} ${lastName}` }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from './components/Counter.vue'
import Binding from './components/Binding.vue'
import Parent from './components/Parent.vue'
import VModelInput from './components/VModelInput.vue'
import SelectDemo from './components/SelectDemo.vue'
import NoInheritAttr from './components/NoInheritAttr.vue'
import BatchModel from './components/BatchModel.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      searchText: '',
      currentSelected: null,
      firstName: '',
      lastName: '',
    }
  },
  components: {
    BatchModel,
    Counter,
    Binding,
    Parent,
    VModelInput,
    SelectDemo,
    NoInheritAttr,
  },
  methods: {
    onSelectChange(e) {
      this.currentSelected = e.target.value
    }
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

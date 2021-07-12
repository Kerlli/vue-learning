<template>
  <div class="consumer">
    <pre>The Top Layer Count is: {{ count }}</pre>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: "Consumer",
  inject: ['count']
}
</script>

<style scoped>
  div.consumer {
    width: 240px;
    height: 120px;
    margin: 16px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
  }
  pre {
    color: coral;
  }
</style>

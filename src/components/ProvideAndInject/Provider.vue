<template>
  <div class="provider">
    <h3>Provider Component</h3>
    <p>count: {{ count }}</p>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Provider",
  data() {
    return {
      count: 0,
    }
  },
  provide() {
    return {
      count: this.count
    }
  }
}
</script>

<style scoped>
  div.provider {
    display: block;
    margin: 16px auto;
    width: 400px;
    height: auto;
    background-color: #aaa;
  }
</style>

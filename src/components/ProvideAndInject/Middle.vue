<template>
  <div class="middle">
    <h4>Middle</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Middle",
}
</script>

<style scoped>
  div.middle {
    width: 360px;
    height: 220px;
    margin: 16px auto;
    background-color: brown;
  }
</style>

<template>
  <div class="provider">
    <h3>Provider Component</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Provider",
  provide: {
    topLayerName: 'Provider',
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="consumer">
    <pre>The Top Layer Name is: {{ topLayerName }}</pre>
  </div>
</template>

<script>
export default {
  name: "Consumer",
  inject: ['topLayerName'],
}
</script>

<style scoped>

</style>
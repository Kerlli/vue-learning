<template>
  <div class="date-picker">
    <!--  $attrs需显式绑定  -->
    <input type="datetime-local" v-bind="$attrs" />
  </div>
</template>

<script>

export default {
  name: "NoInheritAttr",
}
</script>

<style scoped>

</style>
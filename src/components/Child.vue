<template>
  <li v-bind:key="post.id">
    <a href="/">{{ post.title }}</a>
    <span>{{ post.createdAt }}</span>
    <span>{{ post.author }}</span>
    <slot name="extra">Default Text</slot>
    <el-button @click="$emit('enlargeText', 0.1)">Enlarge Text</el-button>
  </li>
</template>

<script>
export default {
  name: "Child",
  props: ['post'],
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
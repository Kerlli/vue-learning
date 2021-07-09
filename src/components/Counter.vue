<template>
  <p>counter: {{ count }}</p>
  <el-button @click="increment">INCREMENT</el-button>
  <el-button @click="decrement">DECREMENT</el-button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>

<style scoped>

</style>
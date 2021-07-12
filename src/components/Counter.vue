<template>
  <p>counter: {{ count }}</p>
  <el-button @click="increment">INCREMENT</el-button>
  <el-button @click.once="decrement">DECREMENT ONCE</el-button>
  <el-button @click="reset">RESET</el-button>
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
    reset() {
      this.count = 0
    },
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
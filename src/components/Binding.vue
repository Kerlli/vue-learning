<template>
  <input type="text" v-model.trim="message" placeholder="input your message"/>
  <p v-if="messageIsNotEmpty">Your message: {{ message }}</p>
</template>

<script>
export default {
  name: "Binding",
  data() {
    return {
      message: '',
    }
  },
  computed: {
    messageIsNotEmpty() {
      return this.message !== ''
    }
  }
}
</script>

<style scoped>

</style>
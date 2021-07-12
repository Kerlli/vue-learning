<template>
  <input type="text" v-model.trim="message" placeholder="input your message"/>
  <!-- :: <input :value="message" @input="message = $event.target.value" /> :: -->
  <p v-if="messageIsNotEmpty">Your message: {{ message }}</p>
</template>

<script>
export default {
  name: "Binding",
  props: {
    message: {
      type: String,
      required: false,
      default: '',
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
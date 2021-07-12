<template>
  <input type="text" :value="firstName" @input="firstNameToCapitalize" />
  <input type="text" :value="lastName" @input="lastNameToCapitalize" />
</template>

<script>
export default {
  name: "BatchModel",
  props: {
    firstName: String,
    lastName: String,
    firstNameModifiers: {},
    lastNameModifiers: {},
  },
  emits: ['update:firstName', 'update:lastName'],
  methods: {
    toCapitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    firstNameToCapitalize(e) {
      let value = e.target.value
      if (this.firstNameModifiers.capitalize) {
        value = this.toCapitalize(value)
      }
      this.$emit('update:firstName', value)
    },
    lastNameToCapitalize(e) {
      let value = e.target.value
      if (this.lastNameModifiers.capitalize) {
        value = this.toCapitalize(value)
      }
      this.$emit('update:lastName', value)
    }
  },
  created() {
    console.log(this.capitalizeModifier)
  }
}
</script>

<style scoped>

</style>
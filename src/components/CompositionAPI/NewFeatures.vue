<template>
  <div>
      firstName: {{ firstName }}
      lastName: {{ lastName }}
      <!-- Count: {{ count }}
      Person Name: {{ person.name }} -->
      twiceCount: {{ twiceCount }}
      <el-button @click="enalrgeCount">Count + 1</el-button>
      <p>
          {{ JSON.stringify(bitcoinData || {}) }}
      </p>
  </div>
</template>

<script>
import { computed, h, onMounted, reactive, ref, watch, toRef, toRefs } from 'vue'
import axios from 'axios'

export default {
  name: "NewFeatures",
  props: {
      firstName: String,
      lastName: String,
  },
  methods: {},
  /**
   * @description attrs, slots 会随组件本身的更新而更新，且
   * 是非响应式的，并应避免对它们进行解构
   * @description 执行setup时无法访问 data, computed, methods
   * 可以访问：props, attrs, slots, emit
   */
  setup(props, { attrs, slots, emit }) {
    //   const { requiredProp } = toRefs(props)
    //   console.log(requiredProp.value)
    //   const optionalProp = toRef(props, 'optionalProp')
    //   console.log(optionalProp.value)

      const count = ref(0)
      const twiceCount = computed(() => count.value * 2)
      
      const person = reactive({ name: 'Broke' })

      const bitcoinData = ref(null)

      const getBitcoinPriceData = async () => {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        if (response && response.data) {
            bitcoinData.value = response.data
        }
      }

      const enalrgeCount = () => {
          count.value = count.value + 1
      }

      watch(count, () => {
          alert('count is changed')
      })

      onMounted(getBitcoinPriceData)

      return {
          bitcoinData,
          getBitcoinPriceData,
          twiceCount,
          enalrgeCount,
      }

    //   return {
    //       count,
    //       person,
    //   }
    // return () => h('div', [count.value, person.name])
  }
}
</script>

<style scoped>

</style>

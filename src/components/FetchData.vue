<template>
  <div>
      <p>{{ JSON.stringify(bitcoinData || {}) }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FetchData",
  data() {
      return {
          bitcoinData: null,
      }
  },
  methods: {
      async fetchBitCoinPrice() {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        if (response && response.data) {
            this.bitcoinData = response.data
        }
      }
  },
  created() {
      this.fetchBitCoinPrice()
  }
}
</script>

<style scoped>
  div.middle {
    width: 360px;
    height: 220px;
    margin: 16px auto;
    background-color: brown;
  }
</style>

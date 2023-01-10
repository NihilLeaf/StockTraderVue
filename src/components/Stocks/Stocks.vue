<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
  name: "Stocks_Component",
  components: { Stock },
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 98.72 },
        { id: 2, name: "Apple", price: 91.73 },
        { id: 3, name: "Tesla", price: 48.76 },
        { id: 4, name: "SpaceX", price: 198.71 },
      ]
    }
  }
}
</script>

<style>

</style>
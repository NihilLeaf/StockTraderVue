<template>
  <v-toolbar class="mb-4" dark app-bar>
    <v-toolbar-title class="headline text-uppercase me-4">
      <v-icon color="#229443">fa-chart-column</v-icon>
      <span class="ms-2">Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn small text to="/">Home</v-btn>
      <v-btn small text to="/portfolio">Portfolio</v-btn>
      <v-btn small text to="/stocks">Stocks</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="endDay" text>End Day</v-btn>
      <v-menu :close-on-click="false" offset-y>
        <template v-slot:activator="{ on }"> <v-btn @click="down = !down" text v-on="on">Save and Load <v-icon class="ms-1" small>{{ down ? 'fa-caret-down' : 'fa-caret-up' }}</v-icon></v-btn></template>
        <v-list>
            <v-list-item @click="saveData">Save Data</v-list-item>
            <v-list-item @click="loadLocalData">Load Data</v-list-item>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <small :class="(funds > 0 ? 'greenText' : 'redText')">Funds: {{ funds | currency }}</small>
      </v-layout>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'header_Componennt',
  data() {
    return {
      down: true,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      const {funds, stockPortfolio, stocks} = this.$store.getters
      this.$http.put('data.json', {funds, stockPortfolio, stocks})
    },
    loadLocalData() {
      this.loadData()
    }
  }
}
</script>

<style scoped>
 .greenText {
  color: #6fba3b;
  text-transform: capitalize;
 }
 .redText {
  color:#e83b3b;
  text-transform: capitalize;
 }
 
</style>
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
      <v-btn text>End Day</v-btn>
      <v-menu :close-on-click="false" offset-y>
        <template v-slot:activator="{ on }"> <v-btn @click="down = !down" text v-on="on">Save and Load <v-icon class="ms-1" small>{{ down ? 'fa-caret-down' : 'fa-caret-up' }}</v-icon></v-btn></template>
        <v-list>
            <v-list-item>Save Data</v-list-item>
            <v-list-item>Load Data</v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  name: 'header_Componennt',
  data() {
    return {
      down: true,
    }
  }
}
</script>

<style scoped>

</style>
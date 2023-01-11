<template>
  <div>
    <h1>Exchange stocks</h1>
    <v-alert border="left" type="info">You can save and load your data</v-alert>
    <v-alert border="left" type="success">Click on end day to start a new day!</v-alert>
    <v-divider class="my-4"></v-divider>
    <p class="headline"><strong>Your Funds: </strong>{{ funds }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home-Component',
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>
<template>
  <v-flex class="pe-3 pb-3" xs12 md6 lg4>
    <v-card :tile="true" style="background: #1f2966">
      <v-card-title class="headline"
        ><strong
          >{{ stock.name }} <small>(Price: ${{ stock.price }}) | Qtde: {{ stock.quantity }}</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card :tile="true" class="bg">
      <v-container fill-height>
        <v-text-field
          dark
          color="#ebede9"
          type="number"
          label="Quantity"
          v-model.number="quantity"
        />
        <v-btn
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          @click="sellStock"
          small
          color="#2c89af"
          class="buyButton"
          >Sell <v-icon x-small class="fa-solid fa-dollar-sign ms-1"></v-icon
        ></v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Stock_Component",
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    sellStock() {
      const ORDER = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('sellStock', ORDER)
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #101445;
  color: #ebede9;
}
.buyButton {
  background-color: #0c4f3f;
}
</style>

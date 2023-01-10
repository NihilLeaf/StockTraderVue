<template>
  <v-flex class="pe-3 pb-3" xs12 md6 lg4>
    <v-card :tile="true" style="background: #0c4f3f">
      <v-card-title class="headline"
        ><strong
          >{{ stock.name }} <small>(Price: ${{ stock.price }})</small></strong
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
          @click="buyStock"
          small
          color="#6fba3b"
          class="buyButton"
          >Buy <v-icon x-small class="fa-solid fa-dollar-sign ms-1"></v-icon
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
    buyStock() {
      const ORDER = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(ORDER);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #0a3639;
  color: #ebede9;
}
.buyButton {
  background-color: #0c4f3f;
}
</style>

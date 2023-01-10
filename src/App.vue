<template>
  <v-app id="bg">
    <v-main>
      <Header />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: "Main_Content",
  components: {Header},
  data: () => ({}),
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Sofia Sans", sans-serif;
  color: #ebede9;
}

#bg {
  background: linear-gradient(to left, #090a14, #10141f);
}
</style>

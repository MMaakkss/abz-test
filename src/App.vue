<template>
  <Header />
  <Banner />
  <Main />
</template>

<script setup>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Main from "./components/Main.vue";
</script>

<style lang="scss">
body {
  #app {
    padding-bottom: 100px;
  }
}
</style>

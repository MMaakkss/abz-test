<template>
  <header class="header">
    <div class="header__container container">
      <img src="../assets/logo.svg" alt="logo" width="104" height="26" />
      <div class="header__buttons">
        <Button @click="scrollToBlock('get-block')"> Users </Button>
        <Button @click="scrollToBlock('post-form')"> Sign up </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from "./Button.vue";
import { scrollToBlock } from "../utils/scrollToBlock";
</script>

<style lang="scss" scoped>
.header {
  background-color: white;

  &__container {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }

  &__buttons {
    .button {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>

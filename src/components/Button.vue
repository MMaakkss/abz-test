<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "src/style/variables";

.button {
  color: $black;
  background-color: $yellow;
  border-radius: 80px;
  width: 100px;
  height: 34px;
  letter-spacing: 0.6px;
  transition: 0.3s;

  &:hover {
    background-color: $button_hover;
  }
}
</style>

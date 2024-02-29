<template>
  <div class="banner">
    <div class="container">
      <div class="banner__container">
        <div class="banner__content">
          <h1>Test assignment for front-end developer</h1>
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they\'ll be building web interfaces with accessibility
            in mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button @click="scrollToBlock('post-form')"> Sign up </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import { scrollToBlock } from "../utils/scrollToBlock";
</script>

<style lang="scss" scoped>
.banner {
  &__container {
    width: 100%;
    height: 650px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/main-bg.webp") no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      height: 500px;
    }
  }

  &__content {
    text-align: center;
    color: #ffffff;
    position: relative;
    max-width: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 40px;
      line-height: 40px;
    }

    p {
      margin: 21px 0 32px;
    }
  }

  @media (max-width: 1024px) {
    .container {
      max-width: unset;
      padding: 0;
    }
  }
}
</style>

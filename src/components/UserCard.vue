<template>
  <div class="user">
    <img :src="data.photo" alt="img" />
    <p>{{ data.name }}</p>
    <span class="user__info">
      <p>{{ data.position }}</p>
      <p class="user__email">{{ data.email }}</p>
      <span class="prompt">{{ data.email }}</span>
      <p>{{ data.phone }}</p>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.user {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 30%;
  min-width: 282px;
  position: relative;

  p {
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
  }

  &__info {
    max-width: 100%;

    // alert when mouse on
    .prompt {
      display: none;
      position: absolute;
      padding: 3px 16px;
      color: #ffffff;
      background-color: black;
      border-radius: 4px;
      left: 50%;
      transform: translate(-50%, 0);
      word-wrap: break-word;
      max-width: 100%;
      z-index: 2;
    }
  }

  &__email {
    cursor: pointer;

    &:hover ~ .prompt {
      display: block;
    }
  }

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 615px) {
    min-width: 100%;
  }
}
</style>

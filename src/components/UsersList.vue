<template>
  <div class="get-block">
    <h2>Working with GET request</h2>
    <div class="get-block__users">
      <UserCard
        v-for="item in userList"
        :key="item.id"
        :data="item"
      />
    </div>
    <Button
      v-show="showButton"
      class="show-more"
      @click="loadMore"
    >
      Show more
    </Button>
  </div>
</template>

<script setup>
import UserCard from "./UserCard.vue";
import Button from "./Button.vue";
import "@formkit/themes/genesis";

import { useMainStore } from "../store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useMainStore();
const { loadMore } = store;
const { users, showButton } = storeToRefs(store);

const userList = computed(() => {
  return users.value.sort((a, b) => a - b)
})
</script>

<style lang="scss" scoped>
@import "src/style/variables";

.get-block {
  text-align: center;

  &__users {
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
    justify-content: center;

    @media (max-width: 992px) {
      gap: 16px;
    }

    @media (max-width: 515px) {
      gap: 20px;
    }
  }

  .show-more {
    margin-top: 50px;
    width: 120px;
  }
}
</style>

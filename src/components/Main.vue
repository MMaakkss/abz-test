<template>
  <div class="container">
    <UsersList />
    <PostForm />
  </div>
</template>

<script setup>
import UsersList from "./UsersList.vue";
import PostForm from "./PostForm.vue";

import { onMounted } from "vue";
import { useMainStore } from "../store";

const store = useMainStore();
const { getUsersList, getFormPositions } = store;

onMounted(() => {
  getUsersList();
  getFormPositions();
});
</script>

<style lang="scss" scoped></style>

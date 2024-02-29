import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getUsers, createUser, getPositions } from "../api";

export const useMainStore = defineStore("mainStore", () => {
  const users = ref([]);
  const positions = ref([]);
  const page = ref(1);
  const totalPages = ref(0);

  const getUsersList = async () => {
    try {
      const { data } = await getUsers(page.value);

      users.value = [...users.value, ...data.users];
      totalPages.value = data.total_pages;
    } catch (e) {
      console.log(e);
    }
  };

  const loadMore = () => {
    if (page.value >= totalPages.value) return;

    page.value++;
    getUsersList();
  };

  const createNewUser = async (formData) => {
    try {
      await createUser(formData);

      clearUserList();
      getUsersList();
    } catch (e) {
      throw new Error(e.response.data.message);
    }
  };

  const clearUserList = () => {
    page.value = 1;
    users.value = [];
  };

  const getFormPositions = async () => {
    try {
      const { data } = await getPositions();

      positions.value = data.positions.reduce((acc, item) => {
        acc[item.id] = item.name;

        return acc;
      }, {});
    } catch (e) {
      console.log(e);
    }
  };

  const showButton = computed(() => {
    return page.value < totalPages.value;
  });

  return {
    users,
    showButton,
    positions,
    getUsersList,
    loadMore,
    createNewUser,
    getFormPositions,
  };
});

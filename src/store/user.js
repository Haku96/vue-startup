import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userName = ref('');

  function setUserName(name) {
    userName.value = name;
  }

  return { userName, setUserName };
});

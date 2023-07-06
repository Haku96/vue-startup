<template>
  <div>Hello Vue.js!</div>
  <Text></Text>
</template>

<script setup>
import { defineOptions } from 'vue';

defineOptions({
  name: 'Home'
});
</script>

<style lang="scss" scoped>
div {
  color: red;
}
</style>

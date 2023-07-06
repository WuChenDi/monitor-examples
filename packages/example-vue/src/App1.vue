<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <router-link to="/page1">Page1</router-link>
  |
  <router-link to="/page2">Page2</router-link>
  |
  <router-link to="/page3">Page3</router-link>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

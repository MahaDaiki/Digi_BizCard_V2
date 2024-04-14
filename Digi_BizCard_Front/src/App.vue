<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
const accessToken = localStorage.getItem('access_token');

if (accessToken) {
  console.log('Access token:', accessToken);
} else {
  console.log('Access token not found');
}

</script>

<template>
  <Nav />

  <RouterView />
</template>

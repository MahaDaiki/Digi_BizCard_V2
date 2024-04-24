<script setup>
import Nav from '../components/Nav.vue'
import home from '../components/Home.vue'
import all from '../components/allcards.vue'
</script>

<template>
  <main>
    <home />
    <all />
    <RouterView />
  </main>
</template>

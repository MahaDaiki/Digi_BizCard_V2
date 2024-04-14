<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const logoutUser = async () => {
  try {
    localStorage.removeItem('access_token')
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<template>
  <button @click="logoutUser">Logout</button>
</template>

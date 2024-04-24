<template>
    <main>
      <edit :cardId="cardId" />
      <router-view />
    </main>
  </template>
  
  <script setup>
import edit from '../components/editform.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const cardId = ref(null)

const route = useRoute()

onMounted(() => {
  cardId.value = route.params.cardId
  if (cardId.value !== null) {
    getCardDetails()
  }
})

const getCardDetails = async () => {
  try {
    const token = localStorage.getItem('access_token')
    const response = await axios.get(`http://127.0.0.1:8000/api/cards/${cardId.value}/edit`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('Card details:', response.data)
  } catch (error) {
    console.error('Error fetching card details:', error)
  }
}
</script>

  
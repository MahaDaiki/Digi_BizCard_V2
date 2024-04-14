<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

const logoutUser = async () => {
  try {
    localStorage.removeItem('access_token')
    isLoggedIn.value = false
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}

onMounted(() => {
  if (localStorage.getItem('access_token')) {
    isLoggedIn.value = true
  }
})
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">BizCard</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" :to="{ name: 'home' }">Profile</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" :to="{ name: 'login' }">Log in</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button @click="logoutUser" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

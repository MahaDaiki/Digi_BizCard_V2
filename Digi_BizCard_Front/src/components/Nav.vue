<script>
import 'bootstrap';
import 'jquery';
import 'popper.js';

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
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'home' }">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'login' }">Log in</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
                </li>
                <li class="nav-item">
                    <li ><button @click="logoutUser">Logout</button></li>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>
<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const logoutUser = async () => {
  try {
    await axios.post('/api/logout');
    console.log('Logout successful');
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
</script>

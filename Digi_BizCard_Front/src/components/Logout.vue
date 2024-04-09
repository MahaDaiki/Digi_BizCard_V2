<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const logoutUser = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/logout');
    console.log('Logout successful');
   
    router.push('/login'); 
  } catch (error) {
    console.error('Logout failed:', error);
    
  }
};
</script>

<template>
    <div>
        <h1>Logging Out</h1>
    </div>
</template>
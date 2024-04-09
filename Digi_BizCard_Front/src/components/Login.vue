
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const loginUser = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value
    });
    console.log('Login successful', response.data);
    router.push('/');
  } catch (err) {
    console.error('Login failed:', err.response.data.message);
  }
};
</script>

<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <a class="h2" href="/">BizCard</a>
          <h1 class="my-5 display-5 fw-bold ls-tight" :style="{ color: 'hsl(218, 81%, 95%)' }">
            The best offer <br />
            <span :style="{ color: 'hsl(218, 81%, 75%)' }">for your business</span>
          </h1>
          <p class="mb-4 opacity-70" :style="{ color: 'hsl(218, 81%, 85%)' }">
            Create Your Own Business Card.
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
              <form @submit.prevent="loginUser">
                <div class="form-outline mb-4">
                  <label class="form-label" for="email">Email</label>
                  <input type="email" id="email" v-model="email" class="form-control" />
                </div>

                <div class="form-outline mb-4"> 
                  <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" v-model="password" class="form-control" />
                </div>
   
                <button type="submit" class="btn btn-primary mb-4">
                  Sign in
                </button> 
                <p>Don't have an account?<router-link to="/register"> Register</router-link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const error = ref(null);

const registerUser = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log('Registration successful', response.data);
  } catch (err) {
    error.value = err.response.data.message;
    console.error('Registration failed:', error.value);
  }
};
</script>

<template>
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 mb-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <a class="h2" href="/">BizCard</a>
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
              The best offer <br />
              <span style="color: hsl(218, 81%, 75%)">for your business</span>
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
              Create Your Own Business Card.
            </p>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
    
            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5 ">
                <form @submit.prevent="registerUser">
                    <div class="mb-4">
                      <div class="form-outline d-flex row"> 
                        <i class="bi bi-person-fill"></i>
                        <input type="text" v-model="name" class="form-control" placeholder="Your FullName" />
                      </div>
                    </div>
    
                    <div class="form-outline mb-4">
                      <input type="email" v-model="email" class="form-control" placeholder="Your Email" />
                    </div>
    
                    <div class="form-outline mb-4"> 
                      <input type="password" v-model="password" class="form-control" placeholder="Insert a Password" />
                    </div>
                    <div class="form-outline mb-4"> 
                      <input type="password" v-model="confirmPassword" class="form-control" placeholder="Confirm Your Password" />
                    </div>
    
                    <button type="submit" class="btn btn-primary mb-4">Sign up</button> 
                    <p v-if="error" class="text-danger">{{ error }}</p>
                    <p>already have an account?<router-link to="/login"> Login</router-link></p>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
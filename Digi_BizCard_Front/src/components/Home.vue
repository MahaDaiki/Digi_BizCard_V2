<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <div class="cover d-flex">
    <div class="container">
      <h1 class="display-3">Welcome to Digi BizCard</h1>
      <p class="lead">Make your business Card.</p>
      <p class="lead">
        <router-link to="/login" class="btn btn-lg btn-primary">Login?</router-link>
      </p>
    </div>
  </div>
  <div>
    <div class="container mt-5">
      <div class="row text-center">
        <div class="col-xl-3 col-sm-6 mb-5" v-for="card in cards" :key="card.id">
          <div class="bg-white rounded shadow-sm p-5">
            <img :src="card.logo" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
            <h5 class="mb-0">{{ card.title }}</h5>
            <span class="small text-uppercase ">{{ card.slogan }}</span>
            <span class="small text-uppercase">{{ card.Address }}</span>  
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">{{card.email}}</li>
              <li class="list-inline-item"> {{  card.phonenumber}}</li>
              <li ><a href="">{{card.website}}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cards: []
      };
    },
    created() {
      this.getAllCards();
    },
    methods: {
      async getAllCards() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/cards');
          this.cards = response.data.cards;
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      }
    }
  };
  </script>
  

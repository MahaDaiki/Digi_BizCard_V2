<template>
    <div>
      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-xl-3 col-sm-6 mb-5" v-for="card in cards" :key="card.id">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img :src="card.logo" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
              <h5 class="mb-0">{{ card.title }}</h5>
              <span class="small text-uppercase text-muted">{{ card.slogan }}</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a :href="'mailto:' + card.email" class="social-link"><i class="fa fa-envelope"></i></a></li>
                <li class="list-inline-item"><a :href="'tel:' + card.phonenumber" class="social-link"><i class="fa fa-phone"></i></a></li>
                <li class="list-inline-item"><a :href="card.website" class="social-link"><i class="fa fa-globe"></i></a></li>
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
          const response = await axios.get('/api/cards');
          this.cards = response.data.cards;
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      }
    }
  };
  </script>
  
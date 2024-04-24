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
            <div class="mt-3">
              <router-link :to="{ name: 'editCard', params: { cardId: card.id } }" class="text-primary mr-2">
                <i class="fa fa-edit"></i> Edit
              </router-link>
              <a href="#" @click="deleteCard(card.id)" class="text-danger"><i class="fa fa-trash"></i> Delete</a>
            </div>
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
      cards: [],
    };
  },
  mounted() {
    this.getUserCards();
  },
  methods: {
    async getUserCards() {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://127.0.0.1:8000/api/usercard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.cards = response.data; 
      } catch (error) {
        console.error('Error fetching user cards:', error);
      }
    },
    async deleteCard(cardId) {
      try {
        const token = localStorage.getItem('access_token');
        await axios.delete(`http://127.0.0.1:8000/api/cards/${cardId}/destroy`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.cards = this.cards.filter(card => card.id !== cardId);
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    },
  }
};
</script>

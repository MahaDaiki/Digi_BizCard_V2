<template>
  <div>
    <div class="bck">
      <div class="container mx-auto text-center">
        <form @submit.prevent="addCard" class="form p-3 border border-secondary rounded">
          <div class="form-group">
            <label for="logo">Logo</label>
            <input type="file" id="logo" @change="handleLogoUpload" accept="image/*" class="form-control-file">
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="newCard.title" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="slogan">Slogan</label>
            <input type="text" class="form-control" v-model="newCard.slogan" placeholder="Slogan">
          </div>
          <div class="form-group">
            <label for="phonenumber">Phone Number</label>
            <input type="text" class="form-control" v-model="newCard.phonenumber" placeholder="Phone Number">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="newCard.email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" v-model="newCard.address" placeholder="Address">
          </div>
          <div class="form-group">
            <label for="website">Website</label>
            <input type="text" class="form-control" v-model="newCard.website" placeholder="Website">
          </div>
          <button type="submit" class="btn btn-primary">Add Card</button>
        </form>
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
      newCard: {
        logo: '', 
        title: '',
        slogan: '',
        phonenumber: '',
        email: '',
        address: '',
        website: ''
        
      }
    };
  },
  mounted() {
    this.getUserCards();
  },
  methods: {
    async getUserCards() {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.cards = response.data;
      } catch (error) {
        console.error('Error fetching user cards:', error);
      }
    },
    async addCard() {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.post('http://127.0.0.1:8000/api/cards/add', this.newCard, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Card added:', response.data);

        this.clearForm();

        this.getUserCards();
      } catch (error) {
        console.error('Error adding card:', error);
      }
    },
    handleLogoUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newCard.logo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    clearForm() {
      
      this.newCard = {
        title: '',
        slogan: '',
        phonenumber: '',
        email: '',
        address: '',
        website: '',
        logo: ''
      };
    }
  }
};
</script>

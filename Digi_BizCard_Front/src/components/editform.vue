<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Edit Card</div>
            <div class="card-body">
              <form @submit.prevent="updateCard">
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input type="text" id="title" class="form-control" v-model="editedCard.title">
                </div>
                <div class="form-group">
                  <label for="slogan">Slogan:</label>
                  <input type="text" id="slogan" class="form-control" v-model="editedCard.slogan">
                </div>
                <div class="form-group">
                  <label for="phonenumber">Phone Number:</label>
                  <input type="text" id="phonenumber" class="form-control" v-model="editedCard.phonenumber">
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" class="form-control" v-model="editedCard.email">
                </div>
                <div class="form-group">
                  <label for="address">Address:</label>
                  <input type="text" id="address" class="form-control" v-model="editedCard.address">
                </div>
                <div class="form-group">
                  <label for="website">Website:</label>
                  <input type="text" id="website" class="form-control" v-model="editedCard.website">
                </div>
                <button type="submit" class="btn btn-primary">Update Card</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['cardId'],
    data() {
      return {
        editedCard: {
          title: '',
          slogan: '',
          phonenumber: '',
          email: '',
          address: '',
          website: ''
        }
      };
    },
    created() {
      this.getCardDetails();
    },
    methods: {
      async getCardDetails() {
    try {
      if (this.cardId !== null) { 
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`http://127.0.0.1:8000/api/cards/${this.cardId}/edit`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.editedCard = response.data.card; 
      }
    } catch (error) {
      console.error('Error fetching card details:', error);
    }
  },
  
      async updateCard() {
        try {
          const token = localStorage.getItem('access_token');
          await axios.put(`http://127.0.0.1:8000/api/cards/${this.cardId}/update`, this.editedCard, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('Card updated successfully');
        } catch (error) {
          console.error('Error updating card:', error);
        }
      }
    }
  };
  </script>
  
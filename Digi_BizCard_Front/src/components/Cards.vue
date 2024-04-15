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
                <a href="#" @click="editCard(card)" class="text-primary mr-2"><i class="fa fa-edit"></i> Edit</a>
                <a href="#" @click="deleteCard(card.id)" class="text-danger"><i class="fa fa-trash"></i> Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="modal fade" ref="editCardModal" id="editCardModal" tabindex="-1" role="dialog" aria-labelledby="editCardModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editCardModalLabel">Edit Card</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateCard">
                <div class="form-group">
                  <label for="editTitle">Title</label>
                  <input type="text" class="form-control" id="editTitle" v-model="editForm.title">
                </div>
                <div class="form-group">
                  <label for="editSlogan">Slogan</label>
                  <input type="text" class="form-control" id="editSlogan" v-model="editForm.slogan">
                </div>
                <div class="form-group">
                  <label for="editPhoneNumber">Phone Number</label>
                  <input type="text" class="form-control" id="editPhoneNumber" v-model="editForm.phonenumber">
                </div>
                <div class="form-group">
                  <label for="editEmail">Email</label>
                  <input type="email" class="form-control" id="editEmail" v-model="editForm.email">
                </div>
                <div class="form-group">
                  <label for="editAddress">Address</label>
                  <input type="text" class="form-control" id="editAddress" v-model="editForm.address">
                </div>
                <div class="form-group">
                  <label for="editWebsite">Website</label>
                  <input type="text" class="form-control" id="editWebsite" v-model="editForm.website">
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
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
    data() {
      return {
        cards: [],
        newCard: {
          title: '',
          slogan: '',
          phonenumber: '',
          email: '',
          address: '',
          website: ''
        },
        editForm: {
          id: null,
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
      async editCard(card) {
        this.editForm.id = card.id;
        this.editForm.title = card.title;
        this.editForm.slogan = card.slogan;
        this.editForm.phonenumber = card.phonenumber;
        this.editForm.email = card.email;
        this.editForm.address = card.address;
        this.editForm.website = card.website;
        this.$refs.editCardModal.classList.add('show');
      },
      async updateCard() {
        try {
          const token = localStorage.getItem('access_token');
          const response = await axios.put(`http://127.0.0.1:8000/api/cards/${this.editForm.id}/update`, this.editForm, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const updatedCardIndex = this.cards.findIndex(card => card.id === this.editForm.id);
          if (updatedCardIndex !== -1) {
            this.cards[updatedCardIndex] = response.data;
          }
          this.$refs.editCardModal.classList.remove('show');
        } catch (error) {
          console.error('Error updating card:', error);
        }
      },
      closeModal() {
        this.$refs.editCardModal.classList.remove('show');
      }
    }
  };
  </script>
  
<template>
    <div>
      <form @submit.prevent="submitForm" class="mt-4">
        <div class="form-group">
          <label for="user_id">User ID:</label>
          <input type="text" v-model="formData.user_id" class="form-control" id="user_id">
        </div>
        <div class="form-group">
          <label for="logo">Logo:</label>
          <input type="file" class="form-control-file" id="logo">
        </div>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" v-model="formData.title" class="form-control" id="title">
        </div>
        <div class="form-group">
          <label for="slogan">Slogan:</label>
          <input type="text" v-model="formData.slogan" class="form-control" id="slogan">
        </div>
        <div class="form-group">
          <label for="phonenumber">Phone Number:</label>
          <input type="text" v-model="formData.phonenumber" class="form-control" id="phonenumber">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="formData.email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" v-model="formData.address" class="form-control" id="address">
        </div>
        <div class="form-group">
          <label for="website">Website:</label>
          <input type="url" v-model="formData.website" class="form-control" id="website">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
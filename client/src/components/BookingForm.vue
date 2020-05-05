<template lang="html">
  <form class="" v-on:submit.prevent="createBooking" method="post">

    <label for="name">Enter Name:</label>
    <input type="text" v-model="name" required>

    <label for="email">Enter Email</label>
    <input type="email" v-model="email" required>

    <input type="submit" value="save">

  </form>
</template>

<script>

import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js'

export default {
  name: 'booking-form',
  data(){
    return {
      name: '',
      email: '',
      checked_in: false
    }
  },
  methods: {
    createBooking(event){
      const newBooking = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      }
      BookingService.createBooking(newBooking)
      .then(booking => eventBus.$emit('booking-created', booking))
    }
  }
}
</script>

<style lang="css" scoped>
</style>

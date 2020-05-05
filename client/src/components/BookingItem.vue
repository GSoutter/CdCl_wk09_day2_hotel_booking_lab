<template lang="html">
  <div>
    <h5>{{booking.name}}</h5>
    <p>{{booking.email}}</p>
    <p>{{booking.checked_in}}</p>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete</button>
    <button v-if="!booking.checked_in" type="button" class="checked-in-btn" v-on:click="checkChange">Check In</button>
    <button v-if="booking.checked_in" type="button" class="checked-out-btn" v-on:click="checkChange">Check Out</button>

  </div>

</template>

<script>
import { eventBus } from '@/main.js'


export default {
  name: 'booking-item',
  props: ['booking'],
  methods: {
    deleteBooking(){
      eventBus.$emit('booking-delete', this.booking._id)
    },
    checkChange(){
      const updatedBooking = {
        _id: this.booking._id,
      }
      if (this.booking.checked_in) {
        updatedBooking.checked_in = false
      } else {
        updatedBooking.checked_in = true
      }      
      eventBus.$emit('booking-checked-change', updatedBooking)
    },

  }


}
</script>

<style lang="css" scoped>
</style>

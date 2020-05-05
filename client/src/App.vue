<template>
  <div id="app">
    <h1>Hotel Bookings Manager</h1>
    <booking-form></booking-form>
    <booking-list :bookings="bookings"></booking-list>

  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue';
import BookingList from '@/components/BookingList.vue';
import BookingService from '@/services/BookingService.js';
import BookingItem from '@/components/BookingItem.vue';

import { eventBus } from '@/main.js'


export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList,
  },
  data() {
    return{
      bookings: [
        {
          _id: 1,
          name: "Gordon",
          email: "Gordon@gordon.com",
          checked_in: false
        },
        {
          _id: 2,
          name: "Mark",
          email: "Mark@Mark.com",
          checked_in: true
        },
        {
          _id: 3,
          name: "Kira",
          email: "Kira@Kira.com",
          checked_in: true
        },
      ]
    }
  },
  mounted(){
    // TODONE: fetch bookings
    BookingService.getBookings()
    .then(bookings => this.bookings = bookings)

    // TODO: $on post booking db, then app
    eventBus.$on('booking-delete', (bookingID) => {
      BookingService.deleteBooking(bookingID)
      .then(() => {
        let index =this.bookings.findIndex(booking => booking._id === bookingID)
        this.bookings.splice(index, 1)
      }
      )
    })

    eventBus.$on('booking-created', (booking) => {
      this.bookings.push(booking)
    })
    // TODO: $on delete booking db, then app


    // TODO: $on put booking db, then app
    eventBus.$on('booking-checked-change', (bookingCheck) => {
      const id = bookingCheck._id
      const payload = {checked_in: bookingCheck.checked_in}

      BookingService.updateBooking(id, payload)
      .then((bookingUpdated) => {
        let index = this.bookings.findIndex(booking => booking._id === bookingUpdated._id)
        this.bookings.splice(index, 1, bookingUpdated)
      })
    })

  }

}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

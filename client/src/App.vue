<template>
  <div id="app">
    <h1>Hotel Bookings Manager</h1>
    <!-- <booking-form></booking-form> -->
    <booking-list :bookings="bookings"></booking-list>

  </div>
</template>

<script>
// import BookingForm from '@/components/BookingForm';
import BookingList from '@/components/BookingList';
import { eventBus } from '@/main.js'


export default {
  name: 'App',
  components: {
    // 'booking-form': BookingForm,
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
    // TODO: fetch bookings
    // TODO: $on post booking db, then app
    eventBus.$on('booking-delete', (bookingDelete) => {
      let index =this.bookings.findIndex(booking => booking._id === bookingDelete._id)
      this.bookings.splice(index, 1)
    })
    // TODO: $on delete booking db, then app
    eventBus.$on('booking-checked-change', (bookingCheck) => {
      console.log(bookingCheck);
      let index =this.bookings.findIndex(booking => booking._id === bookingCheck._id)
      this.bookings[index].checked_in = bookingCheck.checked_in
      // this.bookings.splice(index, 1)
    })
    // TODO: $on put booking db, then app
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

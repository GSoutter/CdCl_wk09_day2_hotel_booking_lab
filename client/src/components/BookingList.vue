<template lang="html">
<div class="">
  <h3>Bookings</h3>
  <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking-item>

</div>
</template>

<script>
import BookingItem from '@/components/BookingItem.vue';


export default {
  name: 'booking-list',
  props: ['bookings'],
  components: {
    'booking-item': BookingItem,
  }
}
</script>

<style lang="css" scoped>
</style>

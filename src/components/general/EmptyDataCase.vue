<template>
  <section>
    <img v-if="info.imageType === 'emptySuitcase'" src="@/assets/img/2b11c87.png" alt="no-upcoming-bookings" />
    <img v-else-if="info.imageType === 'emptyInbox'" src="@/assets/img/no-messages-1.jpg" alt="no-messages" style="max-width: 300px"/>
    <img v-else-if="info.imageType === 'emptyYachts'" src="@/assets/img/no-yachts.jpg" alt="no-upcoming-bookings" style="max-width: 300px"/>
    <img v-else-if="info.imageType === 'noConnectionPhone'" src="@/assets/img/sos-phone.png" alt="no-upcoming-bookings" style="max-width: 300px"/>
    <img v-else-if="info.imageType === 'noConnectionCrab'" src="@/assets/img/shipwreck-island-vector-illustration-broken-ship-deserted-palm-tree-crab.jpg" alt="no-upcoming-bookings" style="max-width: 300px"/>
    <img v-else  src="@/assets/img/man-on-boat.png" alt="no-upcoming-bookings" style="max-width: 300px"/>
    <p class="has-text-weight-semibold">
      
      {{info.title}}
    </p>
    <p>
      {{info.info}}
    </p>
  </section>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style>
</style>

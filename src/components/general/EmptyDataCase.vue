<template>
  <section>
    <img v-if="info.imageType === 'emptySuitcase'" src="@/assets/img/2b11c87.png" alt="no-upcoming-bookings" />
    <img v-if="info.imageType === 'emptyInbox'" src="@/assets/img/no-messages-1.jpg" alt="no-messages" style="max-width: 300px"/>
    <img v-if="info.imageType === 'emptyYachts'" src="@/assets/img/no-yachts.jpg" alt="no-upcoming-bookings" style="max-width: 300px"/>
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

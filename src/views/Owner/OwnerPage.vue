<template>
  <main class="my-yachts">
    <!-- <div class="tabs is-nav is-taller scroll-h has-side-space"> -->

    <!-- <div class="b-tabs"> -->

    <!--TABS-->
    <nav class="tabs is-medium is-taller has-side-space">
      <ul>
        <li>
          <router-link to="/profile/my-yachts/manage" class="is-capitalized">manage</router-link>
        </li>
        <li>
          <router-link to="/profile/my-yachts/hosting" v-if="this.loggedInUser.isOwner" class="is-capitalized">hosting</router-link>
        </li>
        <!-- <li :class="{'is-active' : !showUpcoming}">
          <a>
            <span @click="showUpcoming=false">History</span>
          </a>
        </li>-->
      </ul>
    </nav>

    <section class="width-limit has-space-h is-fullwidth-when-narrow">
      <!-- <div class="box all-bookings is-light is-paddingless is-collapsed-when-narrow has-fade"> -->
      <keep-alive>
        <router-view />
      </keep-alive>

      <!-- </div> -->
    </section>
  </main>
</template>


<script>
export default {
  data() {
    return {
      userLoggedInReservations: [],
      loggedInUser: null,
    }
  },
    async created() {
    this.loggedInUser = this.$store.getters.userLoggedIn;
    try {
      await this.$store.dispatch({
        type: "loadUserMsgs",
        userLoggedInId: this.loggedInUser._id
      });
      this.userLoggedInReservations = await this.$store.dispatch({
        type: "loadUserReservations",
        userId: this.loggedInUser._id
      });
    } catch (err) {
      console.log("Could not load user reservations error:", err);
    }
  },
};
</script>


<style>
</style>

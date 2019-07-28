<template>
  <div class="b-tabs">

    <!--TABS-->
    <nav class="tabs is-medium is-taller has-side-space">
      <ul>
        <li :class="{'is-active' : showUpcoming}">
          <a>
            <!---->
            <span @click="showUpcoming=true">Upcoming</span>
          </a>
        </li>
        <li :class="{'is-active' : !showUpcoming}">
          <a>
            <!---->
            <span @click="showUpcoming=false">History</span>
          </a>
        </li>
      </ul>
    </nav>

    <!--TAB 1-->
    <section class="tab-content">
      <div class="tab-item" style>
        <!---->

        <div
          v-show="showUpcoming"
          class="has-space empty-bookings has-text-centered text-lighter t4 text-unresponsive"
        >
          <!-- HAVE RESERVATION -->
          <div v-if="reservations[0]">
            <div v-for="reservation in reservations" :key=  "reservation._id" class="card">
              <user-reservation-preview-card :reservation="reservation" />
            </div>

            <!--  END HAVE RESERVATION  -->
          </div>

          <!-- NO RESERVATION -->
          <div v-if="!reservations[0]">
            <empty-data-case :info="noUpcomingBooking"></empty-data-case>
          </div>
          <!-- NO RESERVATION END -->
        </div>
        <div class="margin-top-sm"></div>
      </div>

        <!--TAB 2-->
      <div class="tab-item" v-show="!showUpcoming">
        <!-- NO PAST RESERVATION -->
        <div class="empty-bookings has-text-centered text-lighter t4 text-unresponsive">
          <empty-data-case :info="noPastBooking"></empty-data-case>
        </div>
        <!-- NO PAST RESERVATION END -->
        <div class="margin-top-sm"></div>
      </div>
    </section>
  </div>
</template>

<script>
import emptyDataCase from "@/components/general/EmptyDataCase";
import userReservationPreviewCard from "@/components/user/UserReservationPreviewCard"
export default {
  components: { emptyDataCase, userReservationPreviewCard },
  data() {
    return {
      showUpcoming: true,
      user: { _id: "" },
      reservations: [],
      noUpcomingBooking: {
        title: "No upcoming bookings",
        info:
          "Once you make a booking, your upcoming bookings will show up here.",
        imageType: "emptySuitcase"
      },
      noPastBooking: {
        title: "No past bookings ",
        info: "All your past bookings will show up here.",
        imageType: "emptySuitcase"
      }
    };
  },
  async created() {
    try {
      this.user._id = this.$store.getters.userLoggedIn._id;
      const reservations = await this.$store.dispatch({
        type: "loadReservations",
        filterBy: this.user
      });
      this.reservations = reservations;
    } catch (err) {
      console.log("Couldent load reservations error:", err);
    }
  }
};
</script>


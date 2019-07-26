<template>
  <div class="b-tabs">
    <nav class="tabs is-medium is-taller has-side-space ">
      <ul >
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

    <!---->
    <section class="tab-content">
      <div class="tab-item" style>
        <!---->

        <div
          v-show="showUpcoming"
          class="has-space empty-bookings has-text-centered text-lighter t4 text-unresponsive"
        >
          <!-- HAVE RESERVATION -->
          <div v-if="reservations[0]">
            <div v-for="reservation in reservations" :key="reservation._id" class="card">
              <div class="card-image">
                <figure class="image is-1by4">
				  <p class="title is-4">{{reservation.yacht.name}}</p>
                  <img
                    :src="reservation.yacht.img" style="max-width:50vw; max-height:300px; object-fit: contain;"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img
                        :src="reservation.yacht.owner.img"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Owner name: {{reservation.yacht.owner.name}}</p>
                    <a class="subtitle is-6">Owner email: {{reservation.yacht.owner.email}}</a>
					<p>From: {{reservation.fromDate}}</p>
					<p>To: {{reservation.toDate}}</p>
					<p>Number Of Guests: {{reservation.numOfGuest}}</p>
					<p>Price Per Night: {{reservation.yacht.pricePerNight}}$</p>
                  </div>
                </div>

                <div class="content">
                  
                  <br />
                  <span><b>Created: {{reservation.createdAt | moment("dddd, MMMM Do YYYY")}}</b></span>
                </div>
              </div>
            </div>
            <!-- <p class="has-text-weight-semibold">upcoming bookings</p>

            <div v-for="reservation in reservations" :key="reservation._id">
              <p>
                <span>From Date:</span>
                <span>{{reservation.fromDate}}</span>
              </p>
              <p>
                <span>To Date:</span>
                <span>{{reservation.toDate}}</span>
              </p>
              <p>
                <span>yacht:</span>
                <span>{{reservation.yacht.name}}</span>
              </p>
              <p>
                <span>Total Price:$</span>
                {{reservation.totalPrice}}
              </p>
              <hr />
            </div>-->

            <p>Once you make a booking, your upcoming bookings will show up here.</p>
          </div>
          <!-- NO RESERVATION -->
          <div v-if="!reservations[0]">
            <img src="@/assets/img/2b11c87.png" alt="no-upcoming-bookings" />
            <p class="has-text-weight-semibold">No upcoming bookings</p>
            <p>Once you make a booking, your upcoming bookings will show up here.</p>
          </div>
        </div>
        <div class="margin-top-sm"></div>
      </div>

      <div class="tab-item" v-show="!showUpcoming">
        <!---->
        <!---->
        <div class="empty-bookings has-text-centered text-lighter t4 text-unresponsive">
          <img src="@/assets/img/2b11c87.png" alt="no-past-bookings" />
          <p class="has-text-weight-semibold">No past bookings</p>
          <p>All your past bookings will show up here.</p>
        </div>
        <!---->
        <div class="margin-top-sm"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showUpcoming: true,
      user: { _id: "" },
      reservations: []
    };
  },
  async created() {
    try {
      console.log(this.user)
      this.user._id = this.$store.getters.userLoggedIn._id;
      const reservations = await this.$store.dispatch({
        type: "loadReservations",
        filterBy: this.user
      });
      this.reservations = reservations;
    } catch (err) {
      console.log("Couldent load reservations error:", err);
    }
  },
};
</script>


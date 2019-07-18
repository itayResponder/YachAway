<template>
  <div v-if="yacht">
    <!-- <nav class="navbar is-fixed-top" style="top:4px; right:inherit; left:inherit;"> -->
    <nav
      class="panel"
      style="position: sticky;  z-index: 30; top:4px; right:inherit; left:inherit;"
    >
      <p class="panel-heading is-black has-background-white">PRICE PER NIGHT</p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input v-model="fromDate" class="input is-small" type="date" placeholder="dates" />
          <input v-model="toDate" class="input is-small" type="date" placeholder="dates" />

          <!-- <input @click="openCalendar=!openCalendar" v-show="!openCalendar" style="z-index:40;" class="input is-small" />
          <calendarShow @click="openCalendar=!openCalendar" v-show="openCalendar" style="z-index:50;" class="input is-small" />-->

          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input
            v-model="numOfGuest"
            min="1"
            class="input is-small"
            type="number"
            placeholder="How Many Guests"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div class="panel-block is-active">
        <span class="is-medium is-left">{{yacht.pricePerNight}} $</span>
      </div>
      <div class="panel-block">
        <button
          @click="makeReservation"
          class="button is-danger is-link is-outlined is-fullwidth"
        >Book it now</button>
      </div>
    </nav>
  </div>
</template>

<script>
// import datePicker from "@/components/general/DatePicker";
import calendarShow from "@/components/general/CalendarShow";
import Swal from "sweetalert2";
export default {
  props: ["yacht"],
  data() {
    return {
      openCalendar: false,
      fromDate: "2019-07-19", //null,
      toDate: "2019-07-20", //null,
      numOfGuest: 1
    };
  },
  methods: {
    createUserObj() {
      // create USER object
      const { firstName, _id } = this.$store.getters.userLoggedIn;
      const user = {};
      user.name = firstName;
      user._id = _id;
      return user;
    },
    createYachtObj() {
      // create YACHT object
      const yacht = {};
      yacht._id = this.$route.params.id;
      yacht.name = this.yacht.name;
      yacht.pricePerNight = this.yacht.pricePerNight;
      return yacht;
    },
    async makeReservation() {
      const fromDate = this.fromDate;
      const toDate = this.toDate;
      const numOfGuest = this.numOfGuest;

      const user = this.createUserObj();
      const yacht = this.createYachtObj();

      // send wantedReservation
      const currReservation = { numOfGuest, fromDate, toDate, yacht, user };

      if (fromDate && toDate && numOfGuest > 0) {
        // CHECK IF IT IS  A REAL DATE :
        // if(!isNaN(Date.parse(startDate))  && !isNaN(Date.parse(endDate)) )
        try {
          const reservation = await this.$store.dispatch({
            type: "makeReservation",
            currReservation
          });
          await Swal.fire(
            "Allright",
            `Thank you! Your reservation confirmation is: ${reservation._id}
		the owner yacht will contact you soon!`,
            "success"
          );
          this.$router.push("/profile/reservation");
        } catch (err) {
          await Swal.fire(
            "Sorry",
            `Sorry somthing went wrong! dont worry we didnt
		overcharged you ;)`,
            "error"
          );
          console.log("Coule not save reservation error:", err);
        }
      } else {
        this.$toast.open({
          duration: 4050,
          message: `Check you have dates and number of guests`,
          position: "is-top-left",
          type: "is-warning"
        });
      }
    }
  },
  components: {
    calendarShow
    // datePicker
  }
};
</script>

<style>
</style>

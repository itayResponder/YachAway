<template>
  <!-- <div class="content" v-if="yacht"> -->
  <nav
    v-if="yacht"
    class="panel"
    style="position: sticky;  z-index: 30; top:64px; right:inherit; left:inherit;"
  >
    <p class="panel-heading is-black has-background-white">PRICE PER NIGHT</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input v-model="fromDate" class="touch-only input is-small" type="date" placeholder="dates" />
        <input v-model="toDate" class="touch-only input is-small" type="date" placeholder="dates" />
        

        <!-- ################## 
          ON GOING WORK : 
        BUTTON TO SHOW THE CALENDAR YOU SEE IN THE DETAILS -->
        <!-- <button
          class=" is-fullwidth button is-white is-small"
          @click="isCalendarShowModalActive = true"
        >Pick a date</button>
        <b-modal :active.sync="isCalendarShowModalActive" has-modal-card>
          <calendar-show ></calendar-show>
        </b-modal> -->
        <!-- ############### -->
        
        
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
      <button @click="makeReservation" class="button is-danger is-link is-fullwidth">Book it now</button>
    </div>
    <div v-if="getWhatsappLink" class="panel-block">
      <a
        target="_blank"
        :href="getWhatsappLink"
        class="button is-success is-outlined is-but is-fullwidth"
      >{{phoneContactText}}</a>
    </div>
  </nav>
  <!-- </div> -->
</template>

<script>
// import datePicker from "@/components/general/DatePicker";
import calendarShow from "@/components/general/CalendarShow";
import Swal from "sweetalert2";
export default {
  props: ["yacht"],
  data() {
    return {
      isCalendarShowModalActive: false,
      fromDate: "2019-07-19", //null,
      toDate: "2019-07-20", //null,
      numOfGuest: 1,
      reservation: null
    };
  },
  methods: {
    createUserObj() {
      // create USER object
      const { firstName, _id, img } = this.$store.getters.userLoggedIn;
      const user = {};
      user.name = firstName;
      user._id = _id;
      user.img = img;
      return user;
    },
    createYachtObj() {
      // create YACHT object
      const yacht = { owner: {} };
      yacht._id = this.$route.params.id;
      yacht.name = this.yacht.name;
      yacht.pricePerNight = this.yacht.pricePerNight;
      yacht.img = this.yacht.imgs[0];
      yacht.owner.img = this.yacht.owner.img;
      yacht.owner.email = this.yacht.owner.email;
      yacht.owner.name = this.yacht.owner.name;
      return yacht;
    },
    async makeReservation() {
      const fromDate = this.fromDate;
      const toDate = this.toDate;
      const numOfGuest = this.numOfGuest;
      const user = this.createUserObj();
      const yacht = this.createYachtObj();
      const createdAt = Date.now();

      // send wantedReservation
      const currReservation = {
        numOfGuest,
        fromDate,
        toDate,
        yacht,
        user,
        createdAt
      };

      if (fromDate && toDate && numOfGuest > 0) {
        // CHECK IF IT IS  A REAL DATE :
        // if(!isNaN(Date.parse(startDate))  && !isNaN(Date.parse(endDate)) )
        try {
          this.reservation = await this.$store.dispatch({
            type: "makeReservation",
            currReservation
          });
          await Swal.fire(
            "Allright",
            `Thank you! Your reservation confirmation is: ${this.reservation._id}
		the owner yacht will contact you soon!`,
            "success"
          );
        } catch (err) {
          await Swal.fire(
            "Sorry",
            `Sorry somthing went wrong! dont worry we didnt
		overcharged you ;)`,
            "error"
          );
          console.log("Coule not save reservation error:", err);
          return;
        }
        try {
          //Send message to Owner yacht
          this.reservation.yacht.owner._id = this.yacht.owner._id;
          const pendingReservation = await this.$store.dispatch({
            type: "pendingReservation",
            reservation: this.reservation
          });
        } catch (err) {
          console.log("Could not send message error:", err);
        }
        this.$router.push("/profile/reservation");
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
  computed: {
    getWhatsappLink() {
      if (!this.yacht || !this.yacht.owner || !this.yacht.owner.name)
        return false;
      const api = "https://api.whatsapp.com/send?l=en";
      const txt = `Hi!%20I%27m%20interested%20in%20$one%20of%20your%20Yachts,%20specifically%20in%20:%20${this.yacht.name}%20`;
      // for now we not load it from DB :
      let phone = "";
      // for now we not load it from DB :
      if (this.yacht.owner.name.toLowerCase() === "niv") phone = "972548082717";
      else if (this.yacht.owner.name.toLowerCase() === "nadav")
        phone = "972523831348";
      else if (this.yacht.owner.name.toLowerCase() === "itay")
        phone = "972597161645";
      else phone = "";

      this.phoneContactText = "Contact the owner";
      return `${api}&text=${txt}&phone=${phone}`;
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

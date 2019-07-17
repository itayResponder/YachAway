<template>
  <section v-if="userLoggedIn">
    <form class="yacht-edit">
      <b-input v-model="yacht.name" placeholder="Name" rounded></b-input>
      <b-input v-model="yacht.pricePerNight" placeholder="Price Per Night" rounded></b-input>
      <b-input v-model="yacht.reviews.description" placeholder="Description" rounded></b-input>
      <b-input v-model="yacht.maxPeopleOnBoard" placeholder="Max People On Board" rounded></b-input>
      <b-input v-model="yacht.location.country" placeholder="Country" rounded></b-input>
      <b-input v-model="yacht.location.city" placeholder="City" rounded></b-input>
      <b-input v-model="yacht.imgs[0]" placeholder="Insert Img Url" rounded></b-input>
      <div class="block">
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="wifi" type="is-info">Wifi</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="tv" type="is-info">Tv</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="towels" type="is-info">Towels</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="safe" type="is-info">Safe</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="AC" type="is-info">AC</b-checkbox>
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="golf court" type="is-info">Golf Court</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="pool" type="is-info">Pool</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="shnorkel" type="is-info">Shnorkel</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="kitchen" type="is-info">Kitchen</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="fridge" type="is-info">Fridge</b-checkbox>
      </div>
      <p class="content">
        <b>Selection:</b>
        {{yacht.facilities}}
      </p>
      <div class="edit-buttons">
      <b-button @click="saveYacht" type="is-info">Save</b-button>
      <b-button @click="back" type="is-info">Back</b-button>
      </div>
    </form>
  </section>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      userLoggedIn: null,
      id: "",
      yacht: {
        name: "test",
        pricePerNight: 500,
        owner: { userId: "", userFirstName: "" },
        imgs: [],
        location: { country: "Israel", city: "Eilat", lat: "", lng: "" },
        reviews: {title: "best", description: "Awosme yacht", date: "", score: 4.5},
        maxPeopleOnBoard: "20",
        facilities: []
      }
    };
  },

  async created() {
    this.userLoggedIn = this.$store.getters.userLoggedIn;
    if(!this.userLoggedIn) {
      try{
        await Swal.fire("Sorry", "You need to login first", "error");
      } catch {
        console.log('error')
      }
      this.$router.push("/login")
    }
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        var yacht = await this.$store.dispatch({
          type: "getYachtById",
          yachtId: this.id
        });
        this.yacht._id = yacht._id;
        this.yacht = JSON.parse(JSON.stringify(yacht));
      } catch {
        console.log("Couldnt find yacht");
      }
    }
  },
  methods: {
    back() {
      this.$router.push("/yachts");
    },
    async saveYacht() {
      let message = "Yacht has Updated";
      try {
        if (this.yacht._id) {
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
        } else {
          this.yacht.createdAt = Date.now();
          this.yacht.pricePerNight = +this.yacht.pricePerNight;
          this.yacht.owner.userId = this.userLoggedIn._id;
          this.yacht.owner.userFirstName = this.userLoggedIn.firstName;
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
          message = "A new yacht has added";
        }
        this.$router.push("/yachts");
      } catch (err){
        console.log("Could not save yacht error:", err);
      }
      Swal.fire("Allright", message, "success");
    }
  }
};
</script>

<style>
.yacht-edit {
  width: 20rem;
  margin: auto;
  margin-top: 100px;
}
.edit-buttons button {
  margin-right: 20px;
}
</style>

<template>
  <section>
    <form>
      <b-input v-model="yacht.name" placeholder="Name" rounded></b-input>
      <b-input v-model="yacht.pricePerNight" placeholder="pricePerNight" rounded></b-input>
      <b-input v-model="yacht.description" placeholder="description" rounded></b-input>
      <b-input v-model="yacht.type" placeholder="type" rounded></b-input>
      <b-input v-model="yacht.maxPeopleOnBoard" placeholder="maxPeopleOnBoard" rounded></b-input>
      <b-input v-model="yacht.owner.userFirstName" placeholder="Owner's Name" rounded></b-input>
      <b-input v-model="yacht.location.country" placeholder="Country" rounded></b-input>
      <b-input v-model="yacht.location.city" placeholder="City" rounded></b-input>
      <b-input v-model="yacht.imgs.imgUrl" placeholder="insert img Url" rounded></b-input>
      <div class="block">
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="Wifi" type="is-info">Wifi</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Tv" type="is-info">Tv</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Towels" type="is-info">Towels</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Safe" type="is-info">Safe</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="AC" type="is-info">AC</b-checkbox>
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="Golf court" type="is-info">Golf court</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Pool" type="is-info">Pool</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Shnorkel" type="is-info">Shnorkel</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="Kitchen" type="is-info">Kitchen</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="fridge" type="is-info">fridge</b-checkbox>
      </div>
      <p class="content">
        <b>Selection:</b>
        {{yacht.facilities}}
      </p>
      <b-button @click="saveYacht" type="is-info">Save</b-button>
      <b-button @click="back" type="is-info">Back</b-button>
    </form>
  </section>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      id: "",
      yacht: {
        name: "",
        pricePerNight: null,
        owner: { userId: "", userFirstName: "" },
        imgs: [""],
        description: "",
        location: { country: "", city: "", lat: "", lng: "" },
        type: "",
        maxPeopleOnBoard: "",
        facilities: []
      }
    };
  },

  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        var yacht = await this.$store.dispatch({
          type: "getYachtById",
          yachtId: this.id
        });
        console.log("Admine Edit created yacht:", yacht);
        this.yacht._id = yacht._id;
        this.yacht = JSON.parse(JSON.stringify(yacht));
      } catch {
        console.log("Couldnt find yacht");
      }
    }
  },
  methods: {
    back() {
      this.$router.push("/admin");
    },
    async saveYacht() {
      let message = "Yacht has Updated";
      try {
        if (this.yacht._id) {
          console.log("AdminEdit saveyacht this.yacht", this.yacht);
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
        } else {
          this.yacht.createdAt = Date.now();
          this.yacht.pricePerNight = +this.yacht.pricePerNight;
          console.log("AdminEdit add new yacht:", this.yacht);
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
          message = "A new yacht has added";
        }
        this.$router.push("/admin");
      } catch {
        console.log("Could not save yacht");
      }
      Swal.fire("Allright", message, "success");
    }
  }
};
</script>
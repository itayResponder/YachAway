<template>
  <section v-if="userLoggedIn">
    
    <form class="yacht-edit">
      <div class="block">
      <b-input v-model="yacht.name" placeholder="Name" rounded></b-input>
      <b-input v-model="yacht.pricePerNight" placeholder="Price Per Night" rounded></b-input>
      <b-input v-model="yacht.description" placeholder="Description" rounded></b-input>
      <b-input v-model="yacht.maxPeopleOnBoard" placeholder="Max People On Board" rounded></b-input>
      <b-input v-model="yacht.location.country" placeholder="Country" rounded></b-input>
      <b-input v-model="yacht.location.city" placeholder="City" rounded></b-input>
      <b-input v-model="yacht.imgs[0]" placeholder="Image Url" rounded></b-input>
      
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="wifi" type="is-primary">Wifi</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="tv" type="is-primary">Tv</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="towels" type="is-primary">Towels</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="safe" type="is-primary">Safe</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="AC" type="is-primary">AC</b-checkbox>
        <br />
        <b-checkbox v-model="yacht.facilities" native-value="golf court" type="is-primary">Golf Court</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="pool" type="is-primary">Pool</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="shnorkel" type="is-primary">Shnorkel</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="kitchen" type="is-primary">Kitchen</b-checkbox>
        <b-checkbox v-model="yacht.facilities" native-value="fridge" type="is-primary">Fridge</b-checkbox>
      </div>
      <p class="content">
        <b>Selection:</b>
        {{yacht.facilities}}
      </p>
       <!-- <b-field class="file">
        <b-upload v-model="file">
            <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload main image</span>
            </a>
        </b-upload>
        <span class="file-name" v-if="file">
            {{ file }}
        </span>
    </b-field> -->
      <div class="edit-buttons">
      <b-button @click="saveYacht" type="is-primary">Save</b-button>
      <b-button @click="back" type="is-primary">Back</b-button>
      </div>
    </form>
  </section>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      // file: null,
      userLoggedIn: null,
      id: "",
      yacht: {
        name: "test",
        pricePerNight: 500,
        owner: {_id: "" ,email: "", name: "", img: "" },
        imgs: ["https://static01.nyt.com/images/2019/06/22/realestate/22real-boats-qna01-inyt/92e2f7d0e3454d4292c2fbef90bfb8bf-jumbo.jpg"],
        location: { country: "test", city: "test", lat: "", lng: "" },
        reviews: [],
        maxPeopleOnBoard: "25",
        description: "test",
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
        const yacht = await this.$store.dispatch({
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
          this.yacht.createdAt = Date.now().toString();
          this.yacht.pricePerNight = +this.yacht.pricePerNight;
          this.yacht.owner._id = this.userLoggedIn._id;
          this.yacht.owner.name = this.userLoggedIn.firstName;
          this.yacht.owner.email = this.userLoggedIn.email
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
          message = "A new yacht has added";
        }
        if(!this.userLoggedIn.isOwner) {
          await this.$store.dispatch({type: "updateUserIsOwner", userId: this.userLoggedIn._id})
        }
        this.$router.push("/profile/my-yachts");
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

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
        pricePerNight: 0,
        owner: {userId: '', userFirstName: ''},
        imgs: [''],
        description: "",
        location: {country: '', city: '', lat: '', lng: ''},
        type: "",
        maxPeopleOnBoard: 0,
      }
    };
  },
  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        var yacht = await this.$store.dispatch({type: "getYachtById", yachtId: this.id})
        console.log('Admine Edit created yacht:', yacht)
        this.yacht._id = yacht._id;
        this.yacht = JSON.parse(JSON.stringify(yacht));
      } catch {
        console.log('Couldnt find yacht')
      }
    }
  },
  methods: {
    back() {
      this.$router.push('/admin')
    },
    async saveYacht() {
      let message = "Yacht has Updated";
      try {
        if (this.yacht._id) {
          console.log('AdminEdit saveyacht this.yacht', this.yacht)
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
        } else {
          this.yacht.createdAt = Date.now();
          this.yacht.pricePerNight = +this.yacht.pricePerNight;
          console.log('AdminEdit add new yacht:', this.yacht)
          await this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
          message = "A new yacht has added";
        }
        this.$router.push("/admin");
      } catch {console.log('Could not save yacht')}
      Swal.fire("Allright", message, "success");
    }
  }
};
</script>
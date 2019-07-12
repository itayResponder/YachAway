<template>
  <section>
    <form @submit.prevent="saveYacht">
        <b-input v-model="this.yacht.name" placeholder="Name" rounded></b-input>
        <b-input v-model="this.yacht.pricePerNight" placeholder="pricePerNight" rounded></b-input>
        <b-input v-model="this.yacht.description" placeholder="description" rounded></b-input>
        <b-input v-model="this.yacht.type" placeholder="type" rounded></b-input>
        <b-input v-model="this.yacht.maxPeopleOnBoard" placeholder="maxPeopleOnBoard" rounded></b-input>
      <b-button type="is-info">Save</b-button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      yacht: {
        name: "",
        pricePerNight: 0,
        description: "",
        type: "",
        maxPeopleOnBoard: 0
      }
    };
  },
  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        var yacht = this.$store.dispacth({
          type: "getYachtById",
          yachId: this.id
        });
        this.yacht._id = yacht._id;
        this.yacht = JSON.parse(JSON.stringify(yacht));
      } catch {
        console.log("Could not find yacht");
      }
    }
  },
  methods: {
    async saveYacht() {
      let message = "Yacht has Updated";
      try {
        if (this.yacht._id) {
          this.$store.dispacth({ type: "saveYacht", yacht: this.yacht });
        } else {
          this.yacht.createdAt = Date.now();
          this.yacht.pricePerNight = +this.yacht.pricePerNight;
          this.$store.dispatch({ type: "saveYacht", yacht: this.yacht });
          message = "A new yacht has added";
        }
      } catch {}
      Swal.fire("Allright", message, "success");
      this.$router.push("/admin");
    }
  }
};
</script>




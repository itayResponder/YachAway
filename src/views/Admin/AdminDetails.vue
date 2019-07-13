<template>
  <section>
    <br />
    <p>
      <b>Name</b>
      {{yacht.name}}
    </p>
    <p>
      <b>Per night$</b>
      {{yacht.pricePerNight}}
    </p>
    <p>
      <b>Description</b>
      {{yacht.description}}
    </p>
    <p>
      <b>Type</b>
      {{yacht.type}}
    </p>
    <p>
      <b>Max Pepole On Board</b>
      {{yacht.type}}
    </p>
    <p>
      <b>Boat Owner</b>
      {{yacht.owner.userFirstName}}
    </p>
    <p>
      <b>Location</b>
      {{yacht.location.city}},{{yacht.location.country}}
    </p>
    <div>
      <h1>facilities</h1>
      <ul>
        <li v-for="facility in yacht.facilities" :key="facility.id">{{facility}}</li>
      </ul>
    </div>
    <b-button @click="backToAdminPage" type="is-info">Back</b-button>
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
        pricePerNight: "",
        description: "",
        type: "",
        maxPeopleOnBoard: 0,
        facilities: "",
        owner: {
          userFirstName: ""
        },
        location: {
          country: "",
          city: ""
        },
        imgs: {
          imgUrl: ""
        }
      }
    };
  },
  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      try {
        var yacht = await this.$store.dispatch({ type: "getYachtById", yachtId: this.id})
        this.yacht._id = yacht._id;
        this.yacht = JSON.parse(JSON.stringify(yacht));
      } catch {
        console.log("AdminEdit Could not find yacht");
      }
    }
  },
  
  methods: {
    backToAdminPage() {
      this.$router.push('/admin')
    }
  }
};
</script>
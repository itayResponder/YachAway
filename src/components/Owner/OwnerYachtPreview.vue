<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="yacht.imgs[0]" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Name: {{yacht.name}}</p>
          <p class="subtitle is-6">Facilities: {{yacht.facilities}}</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <a>@bulmaio</a>.
        <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
      <div class="buttons">
        <b-button @click="goToDetails" type="button field">
          <img src="@/assets/icons/information-outline.svg" alt="Details" />
        </b-button>
        <b-button @click="editOwnerYacht" type="button field">
          <img src="@/assets/icons/file-document-edit-outline.svg" alt="edit" />
        </b-button>
        <b-button type="button field" @click="removeOwnerYacht">
          <img src="@/assets/icons/delete-forever-outline.svg" alt="delete" />
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  props: ["yacht"],
  data() {
    return {};
  },
  methods: {
    editOwnerYacht() {
      this.$router.push(`/owner/edit/${this.yacht._id}`);
    },
    goToDetails() {
      this.$router.push(`/owner/details/${this.yacht._id}`);
    },
    async removeOwnerYacht() {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!"
        });
        if(result.value) {
          this.$emit("removeOwnerYacht", this.yacht._id);
          Swal.fire("Deleted!", "Your yacht has been deleted.", "success");
        }
      } catch (err) {
        console.log("Could not delete yacht error:", err)
      }
    }
  }
};
</script>
<style scoped>
.card {
  width: 30%;
  margin-bottom:50px;
}
.card:hover {
  box-shadow: 0 0 15px 2px black;
  transition: 0.3s;
}
</style>

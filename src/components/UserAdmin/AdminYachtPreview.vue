<template>
  <tr v-if="yacht">
    <td>{{yacht._id}}</td>
    <td>{{yacht.name}}</td>
    <td>{{yacht.owner}}</td>
    <td>{{yacht.pricePerNight}}</td>
    <td>{{yacht.maxPeopleOnBoard}}</td>
    <td>
      <b-button type="is-info" @click="editYacht(yacht._id)" class="card-footer-item">Edit</b-button>
      <b-button type="is-info" @click="detailsYacht(yacht._id)" class="card-footer-item">Details</b-button>
      <b-button type="is-info" icon-left="delete" @click="removeYacht(yacht._id)" class="card-footer-item">Delete</b-button>
    </td>
  </tr>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "AdminYachtPreview",
  props: ["yacht"],
  data() {
    return {};
  },
  created() {},
  methods: {
    removeYacht(yachtId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$emit("emitRemoveYacht", yachtId);
          Swal.fire("Deleted!", "Your yacht has been deleted.", "success");
        }
      });
    },
    editYacht(yachtId) {
        this.$router.push(`/admin/edit/${yachtId}`);
    },
    detailsYacht(yachtId) {
        this.$router.push(`/admin/${yachtId}`);
    }
  },
};
</script>

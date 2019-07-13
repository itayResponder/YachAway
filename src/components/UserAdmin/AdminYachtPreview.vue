<template>
  <tr v-if="yacht">
    <td>{{yacht._id}}</td>
    <td>{{yacht.name}}</td>
    <td>{{yacht.owner.userFirstName}}</td>
    <td>{{yacht.pricePerNight}}</td>
    <td>{{yacht.maxPeopleOnBoard}}</td>
    <td>
      <a @click="editYacht(yacht._id)" class="card-footer-item">Edit</a>
      <a @click="detailsYacht(yacht._id)" class="card-footer-item">Details</a>
      <a @click="removeYacht(yacht._id)" class="card-footer-item">Delete</a>
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
      console.log('in the details',yachtId)
        this.$router.push(`/admin/${yachtId}`);
    }
  },

  computed: {},
  components: {}
};
</script>

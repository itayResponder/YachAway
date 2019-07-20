<template>
  <section v-if="yachts">
    <owner-yacht-list :yachts="yachts" @removeOwnerYacht="removeOwnerYacht"></owner-yacht-list>
  </section>
</template>

<script>
import OwnerYachtList from "@/components/owner/OwnerYachtList";
export default {
  name: "OwnerYachts",
  data() {
    return {
      yachtsByOwner: null,
      owner: { _id: "" }
    };
  },
  async created() {
    try {
      this.owner._id = await this.$store.getters.userLoggedIn._id;
      this.yachtsByOwner = await this.$store.dispatch({type: "loadYachts", owner: this.owner})
    } catch (err) {
      console.log("Could not get Owner yachts error:", err);
    }
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsToShow;
    }
  },
  methods: {
    removeOwnerYacht(yachtId) {
      this.$store.dispatch({type: "removeYacht", yachtId})
    }
  },
  components: {
    OwnerYachtList
  }
};
</script>

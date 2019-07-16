<template>
  <section v-if="yachts">
    <owner-yacht-list :yachts="yachts"></owner-yacht-list>
  </section>
</template>

<script>
import OwnerYachtList from "@/components/owner/OwnerYachtList";
export default {
  name: "OwnerYachts",
  data() {
    return {
      yachtsByOwner: null,
      loggedInUser: null,
      // filterBy: { userId: "" }
    };
  },
  async created() {
    try {
      this.loggedInUser = await this.$store.getters.userLoggedIn;
      // this.filterBy.userId = this.$store.getters.userLoggedIn._id;
      // this.yachts = await this.$store.dispatch({type: "loadYachts", filterBy: this.filterBy})
      this.yachtsByOwner = await this.$store.dispatch({
        type: "loadYachtsByOwner",
        ownerId: this.loggedInUser._id
      });
    } catch (err) {
      console.log("errpr:", err);
    }
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsByOwnerToShow;
      // return this.$store.getters.yachtsToShow
    }
  },
  components: {
    OwnerYachtList
  }
};
</script>

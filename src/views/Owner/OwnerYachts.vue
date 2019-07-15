<template>
  <section v-if="yachts">
    <h1>OwnerYachts</h1>
    <owner-yacht-list :yachts="yachts"></owner-yacht-list>
  </section>
</template>

<script>
import OwnerYachtList from "@/components/Owner/OwnerYachtList";
export default {
  name: "OwnerYachts",
  data() {
    return {
      yachtsByOwner: null,
      loggedInUser: null,
    };
  },
  async created() {
    try {
      this.loggedInUser = await this.$store.getters.userLoggedIn;
      this.yachtsByOwner = await this.$store.dispatch({type: "loadYachtsByOwner", ownerId: this.loggedInUser._id})
    } catch (err){
        console.log('errpr:',err)
    }
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsByOwnerToShow;
    }
  },
  components: {
    OwnerYachtList
  }
};
</script>

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
      loggedInUser: null,
      filterBy: { userId: "" }
    };
  },
  async created() {
    try {
      this.loggedInUser = this.$store.getters.userLoggedIn;
<<<<<<< HEAD
=======
      // console.log(this.loggedInUser)
      // this.filterBy.userId = this.$store.getters.userLoggedIn._id;
>>>>>>> 09ff5a86bef6b8ce045d13fe78f970769923271c
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

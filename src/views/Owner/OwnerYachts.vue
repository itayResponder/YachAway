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
      yachtsByUser: null,
      // loggedInUser: null,
      user: { _id: "" }
    };
  },
  async created() {
    try {
      this.user._id = await this.$store.getters.userLoggedIn._id;
      console.log('OwnerYachts user:', this.user)
      this.yachtsByUser = await this.$store.dispatch({type: "loadYachts", user: this.user})
    } catch (err) {
      console.log("errpr:", err);
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

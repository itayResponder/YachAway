<template>
  <section>
    <div v-if="!yachts[0]">
          <empty-data-case :info="noYachts"></empty-data-case>
    
    
    </div>
    <owner-yacht-list v-else :yachts="yachts" @removeOwnerYacht="removeOwnerYacht"></owner-yacht-list>
  </section>
</template>

<script>
import OwnerYachtList from "@/components/owner/OwnerYachtList";
import emptyDataCase from "@/components/general/EmptyDataCase";

export default {
  name: "OwnerYachts",
  data() {
    return {
      yachtsByOwner: null,
      filterBy: { ownerId: "" },
      noYachts: {
        title: "No Yachts",
        info:
          "You Didn't list any yachts here ,But hi! you can still have a trip",
        imageType: "emptyYachts",
      },
    };
  },
  async created() {
    try {
      this.filterBy.ownerId = await this.$store.getters.userLoggedIn._id;
      this.yachtsByOwner = await this.$store.dispatch({type: "loadYachts", filterBy: this.filterBy})
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
    OwnerYachtList,
    emptyDataCase
  }
};
</script>

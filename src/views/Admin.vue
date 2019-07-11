<template>
  <section>
    <div class="add-filter">
      <div class="add-yachts">
        <admin-yacht-list @emitRemoveYacht="removeYacht" :yachts="yachts"></admin-yacht-list>
      </div>
    </div>
  </section>
</template>

<script>
import AdminYachtList from "@/components/UserAdmin/AdminYachtList.vue";

export default {
  name: "YachtApp",
  data() {
    return {
      yachts: [],
      newYacht: ""
    };
  },
  async created() {
    try {
      this.yachts = await this.$store.dispatch("loadYachts");
    } catch {
      console.log("Could not found yachts");
    }
  },
  methods: {
    removeYacht(yachtId) {
      console.log("yacht app yacht deleted", yachtId);
      // this.$store.dispatch({ type: "removeYacht", yachtId: yachtId });
    }
  },
  // deleteYacht(yachtId) {
  //   this.$store.dispatch({
  //     type: "deleteYacht",
  //     yachtId
  //   });
  // },
  //   setFilter(filterBy) {
  //     this.$store.commit("setFilter", filterBy);
  //   }
  // },

  // computed: {
  //   yachts() {
  //     return this.$store.getters.yachtsToShow;
  //   }
  // },
  components: {
    AdminYachtList
  }
};
</script>

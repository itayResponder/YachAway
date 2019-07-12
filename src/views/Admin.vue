<template>
  <section v-if="yachts">
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
      newYacht: ""
    };
  },
  created() {
  },
  computed: {
    yachts() {
        return this.$store.getters.yachtsToShow;
    }
  },
  methods: {
    removeYacht(yachtId) {
      this.$store.dispatch({ type: "removeYacht", yachtId: yachtId });
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

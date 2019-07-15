<template>
  <section>
    <div class="add-filter">
      <div class="add-yachts">
        <!-- <admin-yacht-list @emitRemoveYacht="removeYacht" :yachts="yachts"></admin-yacht-list> -->
        <AdminYachtTable :yachts="yachts" @removeYacht="removeYacht" />
      </div>
    </div>
  </section>
</template>

<script>
// import AdminYachtList from "@/components/UserAdmin/AdminYachtList.vue";
import AdminYachtTable from "@/components/UserAdmin/AdminYachtTable";

export default {
  name: "YachtApp",
  data() {
    return {
      newYacht: ""
    };
  },
  created() {},
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
  components: {
    // AdminYachtList,
    AdminYachtTable
  }
};
</script>

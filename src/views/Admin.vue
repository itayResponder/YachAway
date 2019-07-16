<template>
  <section>
    <div class="add-filter">
      <div class="add-yachts">
        <AdminYachtTable :yachts="yachts" @removeYacht="removeYacht" />
      </div>
    </div>
  </section>
</template>

<script>
import AdminYachtTable from "@/components/admin/AdminYachtTable";

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
    AdminYachtTable
  }
};
</script>

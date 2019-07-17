<template>
  <section class="my-cards" v-if="yachts">
    <owner-yacht-preview
      v-for="yacht in yachts"
      :key="yacht._id"
      :yacht="yacht"
      @removeOwnerYacht="removeOwnerYacht"
    ></owner-yacht-preview>
  </section>
</template>

<script>
import OwnerYachtPreview from "@/components/owner/OwnerYachtPreview";

export default {
  name: "OwnerYachtList",
  props: ["yachts"],

  data() {
    return {};
  },
  methods: {
    removeOwnerYacht(yachtId) {
		this.$emit("removeOwnerYacht", yachtId);
	}
  },
  components: {
    OwnerYachtPreview
  }
};
</script>

<style scoped>
.my-cards {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  flex-wrap: wrap;
}
</style>

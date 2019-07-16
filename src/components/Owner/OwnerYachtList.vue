<template>
  <section class="my-cards" v-if="yachts">
    <owner-yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht"></owner-yacht-preview>
  </section>
</template>

<script>
import OwnerYachtPreview from "@/components/Owner/OwnerYachtPreview";

export default {
  name: "OwnerYachtList",
  props: ["yachts"],

  data() {
    return {};
  },
  components: {
    OwnerYachtPreview
  }
};
</script>

<style>
.my-cards {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  flex-wrap: wrap;
}
</style>

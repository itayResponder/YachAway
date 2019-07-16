<template>
  <section v-if="yachts">
    <yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht"></yacht-preview>
  </section>
</template>

<script>
import YachtPreview from "@/components/yacht/YachtPreview";

export default {
  name: "YachtList",
  props: ["yachts"],

  data() {
    return {};
  },
  components: {
    YachtPreview
  }
};
</script>
<style scoped>
.media:hover {
  cursor: pointer;
  box-shadow: 0 0 15px 2px black;
  transition: 0.3s;
}
</style>

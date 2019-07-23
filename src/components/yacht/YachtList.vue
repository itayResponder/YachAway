<template>
  <section>
    <yacht-preview @emitUpdateLikedYacht="emitUpdateLikedYacht" class="img-hover--brightness" v-for="yacht in yachts" :key="yacht._id"
      :yacht="yacht"
      :loggedInUser="loggedInUser"
      :likedYachts="likedYachts"
      >
      </yacht-preview>
  </section>
</template>

<script>
import YachtPreview from "@/components/yacht/YachtPreview";

export default {
  name: "YachtList",
  props: ["yachts", "loggedInUser", "likedYachts"],

  data() {
    return {};
  },
  methods: {
    emitUpdateLikedYacht(updateLikedYachts) {
      this.$emit("emitUpdateLikedYacht", updateLikedYachts)
    },
  },
  components: {
    YachtPreview
  }
};
</script>
<style scoped>
/* .media:hover {
  cursor: pointer;
  box-shadow: 0 0 15px 2px black;
  transition: 0.3s;
} */
.yachts-prev {
  padding: 20px;
  margin-bottom: 40px;
}
/* .yachts-prev:hover {
  cursor: pointer;
  box-shadow: 0 0 1px 1px gray;
  transition: 0.3s;
} */
</style>

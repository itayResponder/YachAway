<template>
  <section>
    <yacht-preview @emitLikedYacht="emitLikedYacht" class="yachts-prev" v-for="yacht in yachts" :key="yacht._id" :yacht="yacht"></yacht-preview>
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
  methods: {
    emitLikedYacht(likedYacht){
      this.$emit("emitLikedYacht",likedYacht)
    }
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
.yachts-prev{
  padding: 20px;
  margin-bottom: 40px;
}
.yachts-prev:hover {
  cursor: pointer;
  box-shadow: 0 0 1px 1px gray;
  transition: 0.3s;
}
</style>

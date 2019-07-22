<template>
  <div class="layout">
    
    <hero :loggedInUser="getLoggedInUser"/>
    <citeis />
    <featureArea />
  </div>
</template>

<script>
import hero from "@/components/Hero";
import citeis from "@/components/Citeis";
import featureArea from "@/components/FeatureArea";

export default {
  name: "home",
  computed: {
    getLoggedInUser() {
      return this.$store.getters.userLoggedIn;
    }
  },
  components: {
    citeis,
    featureArea,
    hero
  }
};
</script>

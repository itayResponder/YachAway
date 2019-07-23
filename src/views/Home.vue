<template>
  <div class="layout">
    
    <hero :loggedInUser="getLoggedInUser"/>
    <citeis />
    <yacht-home-cards />
    <featureArea />
  </div>
</template>

<script>
import hero from "@/components/home/Hero";
import citeis from "@/components/home/Citeis";
import yachtHomeCards from "@/components/home/YachtHomeCards";
import featureArea from "@/components/home/FeatureArea";

export default {
  name: "home",
  computed: {
    getLoggedInUser() {
      return this.$store.getters.userLoggedIn;
    }
  },
  
  components: {
    citeis,
    yachtHomeCards,
    featureArea,
    hero
  }
};
</script>

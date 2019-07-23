<template>
  <div class="layout">
    
    <hero :loggedInUser="getLoggedInUser"/>
    <citeis>
      Sail Your Way
    </citeis>
    <yacht-home-cards />
    <bullets />
    <featureArea  class="margin-top-6rem" />
  </div>
</template>

<script>
import hero from "@/components/home/Hero";
import citeis from "@/components/home/Citeis";
import yachtHomeCards from "@/components/home/YachtHomeCards";
import bullets from "@/components/general/ThreeBulletsAndMedia";
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
    bullets,
    hero
  }
};
</script>

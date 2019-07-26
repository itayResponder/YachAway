<template>
  <section >
  <img class="facillity" style="width:40px; height:40px;" 
  :src="facility | getIcon" />
  <h6>{{facility}}</h6>
   
  </section>
</template>

<script>
export default {
  name: "filiter-facilities",
  props:["facility"],
  data() {
    return {
     
      }
    },
  
   filters: {
    getIcon(facility) {
      facility = facility.toLowerCase();

      switch (facility) {
        case "wifi":
          return require("../../assets/icons/wifi.svg");
        case "pool":
          return require("../../assets/icons/pool.svg");
        case "tv":
          return require("../../assets/icons/television-box.svg");
        case "ac":
          return require("../../assets/icons/ac.svg");
        case "bathroom":
          return require("../../assets/icons/bathroom.svg");
        case "gym":
          return require("../../assets/icons/gym.svg");
        case "towels":
          return require("../../assets/icons/towel.svg");
        case "fishing":
          return require("../../assets/icons/fishing.svg");
        case "golf court":
          return require("../../assets/icons/golf court.svg");
        case "no smoking":
          return require("../../assets/icons/no smoking.svg");
        case "smoking":
          return require("../../assets/icons/smoking allowed.svg");
        case "kitchen":
          return require("../../assets/icons/kitchen.svg");
        case "snorkel":
          return require("../../assets/icons/snorkel.svg");
        case "safe":
          return require("../../assets/icons/safe.svg");
        case "jacuzzi":
          return require("../../assets/icons/jacuzzi.svg");
      }
    }
   
  },
 
};
</script>
<style>
</style>

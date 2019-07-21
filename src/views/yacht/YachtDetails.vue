<template>
  <div class="container">
    <!-- Start Carousel -->
    <figure class="image">
      <vueper-slides
        v-if="yacht.imgs"
        :slide-ratio="1/2"
        :bullets="isNotAMobile"
        :fade="isNotAMobile"
        :touchable="!isNotAMobile"
      >
        <vueper-slide v-for="(image,i) in yacht.imgs" :image="image" :key="i"></vueper-slide>
      </vueper-slides>
    </figure>

    <div class="tile is-ancestor">
      <!-- LEFT -->
      <div class="tile is-parent is-9">
        <article class="tile is-child">
          <div class="content margin-small">
            <!-- TITLE  -->
            <h1>{{yacht.name}}</h1>
            <h4 v-if="yacht">facilities</h4>
            <div class="facilities">
              <!-- facility  -->
              <div
                style="display:inline-block; margin-right:5px;"
                v-for="(facility, idx) in yacht.facilities"
                :key="idx"
              >
                <img style="width:40px; height:40px;" :src="facility | getIcon" />
                <h6>{{facility}}</h6>
              </div>
            </div>
            <p>
              <b>description:</b>
              {{yacht.description}}
            </p>
            <calendarShow />
            <previewReview />
          </div>
        </article>
      </div>

      <!-- RIGHT -->
      <div class="tile is-parent is-vertical is-3">
        <article class="tile is-child">
          <reservationBox :yacht="yacht" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import calendarShow from "@/components/general/CalendarShow";
import previewReview from "@/components/yacht/PreviewReview";
import reservationBox from "@/components/yacht/ReservationBox";
// import imageCarousel from "@/components/general/ImageCarousel";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  data() {
    return {
      //FOR DEMONSTARATION PERPUSES
      toggleDesc: true,
      toggleFacility: true,
      yacht: {},
      isNotAMobile: true
    };
  },
  filters: {
    getIcon(facility) {
      facility = facility.toLowerCase();
      // console.log('facility is ',facility)

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
        case "smoking allowed":
          return require("../../assets/icons/smoking allowed.svg");
        case "kitchen":
          return require("../../assets/icons/kitchen.svg");
        case "snorkel":
          return require("../../assets/icons/snorkel.svg");
        case "safe":
          return require("../../assets/icons/safe.svg");
      }
    }
    //   getDesc(facility){
    // console.log('in the get Desc facility is ',facility)
    //   }
  },

  async created() {
    const yachtId = this.$route.params.id;
    try {
      this.yacht = await this.$store.dispatch({ type: "loadYacht", yachtId });
    } catch (err) {
      console.log("Couldnt get yacht err:", err);
    }

    // AVOID ERROR FOR GIVING A FUNC INSTEAD OF BOLOLEAN
    const tempIsMobile = this.isNotMobile;
    this.isNotAMobile = tempIsMobile ? true : false;
  },
  methods: {
    goBack() {
      this.$router.push("/yachts");
    },

    isNotMobile() {
      if (
        /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  components: {
    calendarShow,
    previewReview,
    reservationBox,
    VueperSlides,
    VueperSlide
    // imageCarousel
  }
};
</script>

<style>
</style>

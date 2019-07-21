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

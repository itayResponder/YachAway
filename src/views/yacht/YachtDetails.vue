<template>
  <div v-if="this.yacht" class="container">
    <!-- Start Carousel -->
    <figure class="image">
      <vueper-slides
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
          <div class="content margin-top-2rem">
            <!-- TITLE  -->
            <h1>{{yacht.name}}</h1>

            <!-- owner -->
            <figure class="image is-48x48" style="display:flex;">
              <img class="level-left level-item is-rounded" :src="getOwnerImg" />
              <!-- <img class="level-left level-item is-rounded" :src="yacht.owner.img" /> -->
              <br />
              <p
                class="level-left level-item has-text-grey margin-min"
              >Your Skipper / Host : {{yacht.owner.name}}</p>
            </figure>

            <!-- description -->
            <h4 class="is-title is-primary  margin-top-6rem">Description</h4>
            <p>{{yacht.description}}</p>

            <h4 class="is-title margin-top-6rem">Facilities</h4>
            <div class="facilities">
              <!-- facility  -->
              <filterFacilities
                class="margin-min"
                style="display:inline-block; margin-right:8px;"
                v-for="(facility, idx) in yacht.facilities" :key="idx" :facility="facility"
              >
                
              </filterFacilities>
            </div>

            <calendarShow class="margin-6rem" />
            <reviewList />
          </div>
        </article>
      </div>

      <!-- RIGHT -->
      <div class="tile is-parent is-vertical is-3">
        <article class="tile is-child">
          <reservationBox :yacht="yacht"/>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import utillService from "@/services/utill.service";
import calendarShow from "@/components/general/CalendarShow";
import reviewList from "@/components/general/ReviewList";
import reservationBox from "@/components/yacht/ReservationBox";
import filterFacilities from "@/components/yacht/filterFacilities";
// import imageCarousel from "@/components/general/ImageCarousel";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  data() {
    return {
      //FOR DEMONSTARATION PERPUSES
      toggleDesc: true,
      toggleFacility: true,
      yacht: null,
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
    const tempIsMobile = utillService.isNotMobile;
    this.isNotAMobile = tempIsMobile ? true : false;
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goBack() {
      this.$router.push("/yachts");
    },
  },

  computed: {
    getOwnerImg() {
      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.yacht.owner.img;
      const settings = "w_48,h_48";
      const placeholder = "https://bulma.io/images/placeholders/48x48.png";
      const newImageUrl = utillService.getImgCloudinary(
        cloudName,
        sourceImage,
        placeholder,
        settings,
        uploadPreset
      );
      return newImageUrl;
      // https://res.cloudinary.com/dopdel26f/image/upload/v1563460765/Users/Itay/IMG-20190531-WA0015_kwkbib.jpg"
    }
  },

  components: {
    calendarShow,
    reviewList,
    reservationBox,
    VueperSlides,
    VueperSlide,
    filterFacilities
    // imageCarousel
  }
};
</script>

<style>
</style>

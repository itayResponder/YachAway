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

    <!-- End Carousel -->
    <div class="tile is-ancestor" style="margin: 0 0 0 50px !important;">
      <!-- LEFT -->
      <div class="tile is-parent is-9">
        <div class="tile is-child">
          <nav class="level is-relative">
            <div class="level-left level-item has-text-centered margin-top-2rem">
              <!-- TITLE  -->
              <h1 class="title is-size-3">{{yacht.name}}</h1>
            </div>
            <!-- owner -->
            <div class="level-right level-item" style="position:absolute; left:84%; top:38%">
              <figure class="image is-64x64">
                <img class="is-rounded" :src="getOwnerImg" />
                <!-- <img class="level-left level-item is-rounded" :src="yacht.owner.img" /> -->
              </figure>
              <p class="has-text-grey margin-1rem">{{yacht.owner.name}}</p>
            </div>
          </nav>

          <!-- description -->
          <div class="text-start">
            <h4 class="is-subtitle is-size-5 margin-top-4rem">About this yacht</h4>
            <p>{{yacht.description}}</p>
            <p>{{info}}</p>
          </div>

          <!-- Accommodates  -->
          <hr />
          <div class="text-start">
            <h4 class="is-subtitle is-size-5 margin-top-2rem">Accommodates</h4>
              <ul class="info-bullet">
                <li>
                  type: {{yacht.type}}
                </li>
                <li>
                  max people on board: {{yacht.maxPeopleOnBoard}}
                </li>
                <li>
                  rooms: {{yacht.cabin}}
                </li>
                <li>
                  bedrooms: {{bedrooms}}
                </li>
                <li>
                  bathrooms: {{bathrooms}}
                </li>
                <li>
                  size: {{size}} sqm
                </li>
              </ul>
            </div>
          <!-- </div> -->

          <!-- facility  -->
          <hr />
          <div class="text-start">
            <h4 class="is-subtitle is-size-5 margin-top-2rem">Facilities</h4>
            <div class="facilities">
              <div
                class="is-inline-flex margin-top-1rem"
                style="margin-left:1rem;"
                v-for="(facility, idx) in yacht.facilities" :key="idx"
              >
              <filterFacilities :facility="facility"/>
                
            </div>
          </div>
        </div>

          <hr />
          <calendarShow class="margin-top-4rem" />
          <hr />
          <reviews-stars class="all-stars" :reviews ="yacht.reviews"/>
          <hr />
          <review-list />
        </div>
      </div>
      <!-- </div> -->

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
import utillService from "@/services/utill.service";

import calendarShow from "@/components/general/CalendarShow";

import reviewList from "@/components/general/ReviewList";
import reviewsStars from "@/components/general/ReviewsStars";

import reservationBox from "@/components/yacht/ReservationBox";
import filterFacilities from "@/components/yacht/filterFacilities";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  data() {
    return {
      yacht: null,
      isNotAMobile: true,
      // :::::::::::::::::::::::::
      //FOR DEMONSTARATION PERPUSES
      bedrooms: Math.round(Math.random() * 4 + 1),
      bathrooms: Math.round(Math.random() * 2 + 1),
      size: Math.round(Math.random() * 220 + 120),
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est quam, volutpat et arcu eu, pharetra congue augue. Integer vel nibh eu eros interdum commodo. Vivamus finibus fringilla libero, id consectetur purus sollicitudin vel. Proin dapibus ante et pharetra luctus. Ut lacinia ante ut nunc pellentesque auctor. Proin laoreet erat sed ornare molestie. Fusce vehicula ut nulla facilisis vulputate. Quisque vel purus ac lectus tempus viverra. Maecenas at sem at erat pellentesque hendrerit nec in massa. Vestibulum nec lacinia dui, a congue ex. Vivamus ac ultricies mauris. Suspendisse commodo tempus suscipit. Nunc malesuada eu tortor in hendrerit"
      // :::::::::::::::::::::::::
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
    }
  },

  computed: {
    getOwnerImg() {
      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.yacht.owner.img;
      const settings = "w_64,h_64";
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
    reviewsStars,
    reservationBox,
    VueperSlides,
    VueperSlide,
    filterFacilities
    // imageCarousel
  }
};
</script>

<style scoped>
.info-bullet ::before {
content: '\227B';
color: #927f7f; 
}

.star {
  width:8% !important;
  height:8% !important;
}
</style>

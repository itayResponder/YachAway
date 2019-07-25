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
          <nav class="level">
            <div class="level-left level-item has-text-centered margin-top-2rem">
              <!-- TITLE  -->
              <h1 class="title is-size-3">{{yacht.name}}</h1>
            </div>
            <!-- owner -->
            <div class="level-right level-item" style="margin: 0 20px;">
              <figure class="image is-48x48">
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
                  rooms: {{rooms}}
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
                class="margin-top-1rem"
                style="display:inline-block; margin-right:8px;"
                v-for="(facility, idx) in yacht.facilities"
                :key="idx"
              >
                <img style="width:40px; height:40px;" :src="facility | getIcon" />
                <h6>{{facility}}</h6>
              </div>
            </div>
          </div>

          <hr />
          <calendarShow class="margin-top-4rem" />
          <reviewList />
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
      yacht: null,
      isNotAMobile: true,
      rooms: Math.round(Math.random() * 9 + 1),
      bedrooms: Math.round(Math.random() * 4 + 1),
      bathrooms: Math.round(Math.random() * 2 + 1),
      size: Math.round(Math.random() * 220 + 120),
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est quam, volutpat et arcu eu, pharetra congue augue. Integer vel nibh eu eros interdum commodo. Vivamus finibus fringilla libero, id consectetur purus sollicitudin vel. Proin dapibus ante et pharetra luctus. Ut lacinia ante ut nunc pellentesque auctor. Proin laoreet erat sed ornare molestie. Fusce vehicula ut nulla facilisis vulputate. Quisque vel purus ac lectus tempus viverra. Maecenas at sem at erat pellentesque hendrerit nec in massa. Vestibulum nec lacinia dui, a congue ex. Vivamus ac ultricies mauris. Suspendisse commodo tempus suscipit. Nunc malesuada eu tortor in hendrerit"
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
    VueperSlide
    // imageCarousel
  }
};
</script>

<style>
.info-bullet ::before {
content: '\227B';
color: #927f7f; 
}
</style>

<template>
  <div class="tile is-ancestor">
    <!-- LEFT -->
    <div class="tile is-parent is-vertical is-3">
      <article class="tile is-child">
        <reservationBox :yacht="yacht" />
      </article>
    </div>

    <!-- RIGHT -->
    <div class="tile is-parent is-9">
      <article class="tile is-child">
        <div class="content">
          <!-- //SLIDER TESTS -->
          <figure  class="image is-16by9">
            <img v-if="yacht.imgs" :src="yacht.imgs[currImg]" @click="nextPicture" />
          </figure>

          <!-- <div v-for="img in yacht.imgs" :key="img.id">
            <div class="box">
              <figure class="image is-16by9">
                <img :src="img" />
              </figure>
            </div>
          </div>-->

          <!-- TITLE  -->
          <h1>{{yacht.name}}</h1>
          <p>
            <b>description:</b>
            {{yacht.description}}
          </p>
          <calendarShow />
          <previewReview />

          <!-- IMG UI EXAMPLES -->
          <!-- <img  src="@/assets/img/temp/details-descreption-bnb.jpg" /> -->
          <!-- <img  src="@/assets/img/temp/details-descreption.jpg" /> -->
          <!-- <img src="@/assets/img/temp/details-popular-facility-bnb.jpg" /> -->
          <!-- <img src="@/assets/img/temp/details-popular-facility.jpg" /> -->
          <!-- <img src="@/assets/img/temp/details-reviews.jpg" />  -->
          <!-- END -->
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import calendarShow from "@/components/general/CalendarShow";
import previewReview from "@/components/yacht/PreviewReview";
import reservationBox from "@/components/yacht/ReservationBox";

export default {
  data() {
    return {
      //FOR DEMONSTARATION PERPUSES
      toggleDesc: true,
      toggleFacility: true,
      yacht: {},
      currImg: 0,
      isMounted: false
    };
  },
  async created() {
    const yachtId = this.$route.params.id;
    try {
      this.yacht = await this.$store.dispatch({ type: "loadYacht", yachtId });
    } catch (err) {
      console.log("Couldnt get yacht err:", err);
    }
  },
  methods: {
    goBack() {
      this.$router.push("/yachts");
    },
    nextPicture() {
		console.log(this.yacht.imgs.length);
		
      if (this.isMounted && this.yacht.imgs) {
        if (this.yacht.imgs.length < this.currImg) this.currImg++;
        else this.currImg = 0;
      }
    }
  },
  mounted() {
    this.isMounted = true;
  },
  components: {
    calendarShow,
    previewReview,
    reservationBox
  }
};
</script>

<style>
</style>

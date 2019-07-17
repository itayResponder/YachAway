<template>
  <!-- IT MAYBE NEED TO USE TILES AND NOT GRID FOR RESPONSIVE -->
  <div class="container grid">
    <reservationBox />
    <!-- is slots possible ?? -->
    <div></div>
    <div class="content">
      <a
        alt="demo"
        target="_blank"
        href="https://demo07.gethomey.io/listing/large-and-modern-bedroom/"
      >
        <!-- <img src="@/assets/img/temp/details-yacht-pics.jpg" /> -->
        <!-- <figure class="image is-4by3">
				<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>-->
		<h1>{{yacht.name}}</h1>
      </a>
	  <div v-for="img in yacht.imgs" :key=img>

      <figure  v-if="yacht" class="image is-1x1"  >
        <img :src="img"/>
      </figure>

	  </div>
	  <p><b>description:</b> {{yacht.description}}</p>
     
      <!-- <a target="_blank" href="https://demo03.gethomey.io/listing/large-and-modern-bedroom/">
				<img src="@/assets/img/temp/details-top-bnb.jpg" />
      </a>-->

      <!-- <img v-show="toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption-bnb.jpg" />
			<img v-show="!toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption.jpg" />

			<img v-show="toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility-bnb.jpg" />
      <img v-show="!toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility.jpg" />-->
      <calendarShow />

      <previewReview />
      <!-- <img src="@/assets/img/temp/details-reviews.jpg" /> -->
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
      yacht: {}
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
    }
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

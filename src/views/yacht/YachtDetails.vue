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
          <figure class="image is-16by9">
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
          <h4 v-if="yacht">facilities</h4>
          <div>

          <div style="display:inline-block; margin-right:5px;" v-for="(facility, idx) in yacht.facilities" :key="idx">
            <img style="width:40px; height:40px;" :src="facility | getIcon" >
            <h6>{{facility}}</h6>
          </div>

          </div>
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
  filters: {
    getIcon(facility) {
    
    facility = facility.toLowerCase()
    // console.log('facility is ',facility)
      
switch (facility) {
  case 'wifi':
   return  require('../../assets/icons/wifi.svg')
    break;
  case 'pool':
   return  require('../../assets/icons/pool.svg')
    break;
  case 'tv':
   return  require('../../assets/icons/television-box.svg')
    break;
  case 'ac':
   return  require('../../assets/icons/ac.svg')
    break;
  case 'bathroom':
   return  require('../../assets/icons/bathroom.svg')
    break;
  case 'gym':
   return  require('../../assets/icons/gym.svg')
    break;
  case 'towels':
   return  require('../../assets/icons/towel.svg')
    break;
  case 'fishing':
   return  require('../../assets/icons/fishing.svg')
    break;
  case 'golf court':
   return  require('../../assets/icons/golf court.svg')
    break;
  case 'no smoking':
   return  require('../../assets/icons/no smoking.svg')
    break;
  case 'smoking allowed':
   return  require('../../assets/icons/smoking allowed.svg')
    break;
  case 'kitchen':
   return  require('../../assets/icons/kitchen.svg')
    break;
  case 'snorkel':
   return  require('../../assets/icons/snorkel.svg')
    break;
  case 'safe':
   return  require('../../assets/icons/safe.svg')
    break;
      // return require('../../assets/icons/wifi.svg')
    }
  },
  getDesc(facility){
// console.log('in the get Desc facility is ',facility)
  }
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

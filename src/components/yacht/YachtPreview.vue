<template v-if="yacht">
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img :src="yacht.imgs[0]" style="max-width:20vw; max-height:160px; object-fit: cover;" />
      </p>
    </figure>
    <div class="media-content">
      <router-link :to="getUrlWithYachtId">
        <div class="content">
          <strong class="title is-4">{{yacht.name}}</strong>
          <p
            class="has-gray-text is-small"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <!-- </div> -->
        </div>
      </router-link>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="image is-32x32 margin-min">
              <img class="is-rounded" :src="yacht.user.img" />
<p><b>{{yacht.location.country}}</b>,<b>{{yacht.location.city}}</b></p>
           
            <small>{{yacht.user.name}}</small>

            <!-- facilites -->
          </div>
        </div>
      </nav>
    </div>

    <!-- Reviews and Price -->
    <div class="media is-boxed has-bullet-separator" style="text-align: center">
      <div>
        <p
          style="font-size: 2rem; font-family: Montserrat,Arial,sans-serif;"
        >{{getAverageReviews}}<br> <span style="font-size:20px" v-html="showStars"></span></p>
        <small class="has-text-grey">{{getNumberOfReviews}} Reviews</small>
        <router-link :to="getUrlWithYachtId" class="button is-info is-6 margin-min">More Details</router-link>
      </div>
    </div>
  </article>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "YachtPreview",
  props: ["yacht"],
  data() {
    return {
		avrage:''
	};
  },
  created() {
    // console.log("in the preview yacht are = ", this.yacht);
  },
  methods: {},
  computed: {
    getNumberOfReviews() {
      return this.yacht.reviews.length ;
    },
    getAverageReviews() {
    var length = this.yacht.reviews.length;
		  var sum = 0
      this.yacht.reviews.forEach(review => { 
          sum += review.score 
      })
    var average = sum/length
		  var roundedAverage = Math.round( average * 10 ) / 10;
		  this.average = roundedAverage
		  return roundedAverage
	},
	showStars(){
		var stars = ''
		// console.log('average is ',this.average)
		if (this.average < 1 ) return ''
		else if (this.average < 1.5 ) return stars ='&#11088'
		else if (this.average < 2.5 ) return stars = '&#11088 &#11088'
		else if (this.average < 3.5 ) return stars = '&#11088 &#11088 &#11088'
		else if (this.average < 4.5 ) return stars ='&#11088 &#11088 &#11088 &#11088'
		else  return stars = '*****'
		return stars

	},
    getUrlWithYachtId() {
      return "/yacht/" + this.yacht._id;
    }
  }
};
</script>
<style scoped>
a {
  color: inherit;
}
.score {
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #999;
  color: #999;
}
.margin-min {
  margin: 1rem;
}
/* CSS OF NIV  ---- FOR DEBUG */
/* *:not(path):not(g) {
    color: hsla(210, 100%, 100%, 0.9) !important;
    background: hsla(210, 100%, 50%, 0.5) !important;
    outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
} */
</style>
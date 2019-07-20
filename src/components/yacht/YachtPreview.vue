<template>
  <article class="media">
    <figure class="media-left">
      <p class="image img-hover-zoom img-hover-zoom">
        <img :src="yacht.imgs[0]" style="max-width:20vw; max-height:200px; object-fit: cover;" />
      </p>
    </figure>
    <div class="media-content">
      <router-link :to="getUrlWithYachtId">
        <div class="content">
          <strong class="title is-4">{{yacht.name}}</strong>
          <p class="has-gray-text is-small">{{yacht.description}}</p>
          <!-- </div> -->
        </div>
      </router-link>
      <p>
        <b>{{yacht.location.country}}</b>,
        <b>{{yacht.location.city}}</b>
      </p>

      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="image is-48x48 margin-min">
              <img class="is-rounded" :src="yacht.owner.img" />
            </p>
            <p>
              <b>{{yacht.owner.name}}</b>
              <!-- facilites -->
            </p>
            <b-button type="button field" @click="markAsLiked">
              <img src="@/assets/icons/baseline-thumb_up.svg" style="color:blue;" alt="thumb" />
            </b-button>
          </div>
        </div>
      </nav>
    </div>

    <!-- Reviews and Price -->
    <div class="media is-boxed has-bullet-separator" style="text-align: center">
      <div>
        <p style="font-size: 2rem; font-family: Montserrat,Arial,sans-serif;">
          {{yacht.pricePerNight}} $
          <!-- BY NADAV: USED TO BE :  {{getAverageReviews}} -->
          <br />
          <span style="font-size:1rem" v-html="showStars"></span>
        </p>
        <small class="has-text-grey">{{getNumberOfReviews}} Reviews</small>
        <router-link :to="getUrlWithYachtId" class="button is-primary is-6 margin-min">More Details</router-link>
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
      avrage: "",
      likedYacht: {
        _id: "",
        name: "",
        img: ""
      }
    };
  },
  // "favorites": [{"yachtId":"y103","yachtName":"Ronaldinho","yachtImage":"imgUrl"}
  //
  methods: {
    markAsLiked() {
      this.likedYacht._id = this.yacht._id;
      this.likedYacht.name = this.yacht.name;
      this.likedYacht.img = this.yacht.imgs[0];
      this.$emit("emitLikedYacht", this.likedYacht);
    }
  },
  computed: {
    getNumberOfReviews() {
      return this.yacht.reviews.length;
    },
    getAverageReviews() {
      var length = this.yacht.reviews.length;
      var sum = 0;
      this.yacht.reviews.forEach(review => {
        sum += review.score;
      });
      var average = sum / length;
      this.average = average;
      return average;
    },
    showStars() {
      this.averag = this.getAverageReviews;
      var stars = "";
      while (this.average > 0.5) {
        stars += '<img src="/img/icons/star.svg"/>';
        // stars += '&#11088 ';
        this.average--;
      }
      if (this.average === 0.5)
        stars += '<img src="/img/icons/star-half.svg"/>';
      return stars;
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
</style>
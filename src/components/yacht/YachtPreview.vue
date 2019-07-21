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
              <b style="margin-right:20px;">{{yacht.owner.name}}</b>
              <!-- facilites -->
            </p>
            <div v-if="loggedInUser">
              <div v-if="liked">
            <b-button v-if="like" type="button field" @click="likeClicked">
              <img src="@/assets/icons/baseline-favorite.svg" alt="thumb" />
            </b-button>
            <b-button v-if="!like" type="button field" @click="likeClicked">
              <img src="@/assets/icons/baseline-favorite_border.svg" alt="thumb" />
            </b-button>
              </div>
            </div>
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
  props: ["yacht", "loggedInUser"],
  data() {
    return {
      avrage: "",
      likedYacht: {
        _id: "",
        name: "",
        img: ""
      },
    };
  },
  methods: {
    async likeClicked() {
      var updateLikedYachts = this.loggedInUser.likedYachts.find(
        likedYacht => likedYacht._id === this.yacht._id
      );
      console.log('yachtPrev:',updateLikedYachts)
      if (updateLikedYachts) {
        try {
           let updatedLikedYachts = await this.$store.dispatch({type: 'updateUserLikedYachts', updateLikedYachts})

        } catch (err) {
          console.log('YachtPrev error:', err)
        }
        console.log("allready exist!");
      } else {
        this.likedYacht._id = this.yacht._id;
        this.likedYacht.name = this.yacht.name;
        this.likedYacht.img = this.yacht.imgs[0];
        let cpyLikedYacht = JSON.parse(JSON.stringify(this.likedYacht));

        this.$emit("emitLikedYacht", cpyLikedYacht);
      }
    }
  },
  computed: {
    // user() {
    //   console.log('user',this.$store.getters.userLoggedIn)
    //   return this.$store.getters.userLoggedIn
    // },
    liked() {
      return this.loggedInUser.likedYachts;
    },
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
    like() {
      return this.loggedInUser.likedYachts.find(likedYacht =>
      likedYacht._id === this.yacht._id
      );
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
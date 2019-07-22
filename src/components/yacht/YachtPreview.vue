<template>
  <div class="columns is-12 is-mobile row-shadow yacht-list-preview-margin max-height">
    <div class="column is-one-third">
      <!-- image is-4by5 -->
      <div class="container">

      <figure class="image img-wrap img-hover-zoom" style="overflow: hidden;">
        <img :src="yacht.imgs[0]" class="img-boat" style="height:auto; object-fit: fill; overflow: hidden;" />
        <div v-if="loggedInUser">
          <div v-if="liked">
            <img
              v-if="!like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple-outline.svg"
              alt="you don't like this yacht yet"
              class="is-relative like"
              style="height:50px; z-index: 10; float:right; left: 31%; top:-12.5rem; padding:10px;"
            />

            <img
              v-if="like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple.svg"
              alt="favorite yacht"
              class="is-relative like"
              style="height:50px; z-index: 10; float:right; left: 31%; top:-12.5rem; padding:10px;"
            />
          </div>
        </div>
      </figure>
      </div>

      <div style="position:relative;"></div>
    </div>
    
    <!--#################### -->
    <!-- TODO : SHOW IT IN A BETTER WAY -->
    
    <!-- TEXT -->
    <!-- <div class="column is-6 horiznal-shadow"> -->
      <router-link :to="getUrlWithYachtId">
        <!-- <div class="media-content"> -->
          <!-- <div class="content"> -->
            <strong class="title is-4">{{yacht.name}}</strong>
            <p class="has-gray-text is-small">{{yacht.description}}</p>
          <!-- </div> -->
        <!-- </div> -->

        <!-- <nav class="level is-mobile"> -->
          <!-- <div class="content"> -->
          
          <!-- <div class="level-left level-item"> -->
          <p>
            <b>{{yacht.owner.name}}</b>
            <!-- THE FACILITES -->
          </p>
          <!-- </div> -->

          <!-- <div class="level-left is-hidden-mobile"> -->
          <p class="is-hidden-mobile">
            <span class=" has-text-grey"> {{yacht.location.country}}</span>,
            <span>{{yacht.location.city}}</span>
          </p>
          <figure class="image is-48x48 margin-min">
            <img class="is-rounded" :src="yacht.owner.img" />
          </figure>
          <!-- </div> -->
          <!-- </div> -->
        <!-- </nav> -->
      </router-link>
    <!-- </div> -->

    <!-- REVIEWS AND PRICE -->
    <div class="column">
      <div class="media is-boxed has-bullet-separator" style="text-align: center">
        <div>
          <p class="price-per-night">
            {{yacht.pricePerNight}} $
            <br />
          </p>
          <span v-html="showStars"></span>
          <small class="is-center is-clearfix has-text-grey">{{getNumberOfReviews}} Reviews</small>
          <router-link
            :to="getUrlWithYachtId"
            class="button is-primary is-hidden-mobile is-3 margin-min"
          >Sail !</router-link>
        </div>
      </div>
    </div>

    <!-- END columns -->
  </div>
</template>

<script>
// import Swal from "sweetalert2";
export default {
  name: "YachtPreview",
  props: ["yacht", "loggedInUser"],
  data() {
    return {
      isLike: false,
      avrage: "",
      likedYacht: {
        _id: "",
        name: "",
        img: "",
        isLiked: false
      }
    };
  },
  methods: {
    likeClicked() {
      var updateLikedYachts = this.loggedInUser.likedYachts.find(
        likedYacht => likedYacht._id === this.yacht._id
      );
      if (updateLikedYachts) {
        var cpyUpdatedLikedYachts = JSON.parse(JSON.stringify(updateLikedYachts));
        cpyUpdatedLikedYachts.isLiked = true;
        this.$emit("emitUpdateLikedYacht", cpyUpdatedLikedYachts);
      } else {
        this.likedYacht._id = this.yacht._id;
        this.likedYacht.name = this.yacht.name;
        this.likedYacht.img = this.yacht.imgs[0];
        updateLikedYachts = this.likedYacht;
        this.$emit("emitUpdateLikedYacht", updateLikedYachts);
      }
    }
  },
  computed: {
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
      return this.loggedInUser.likedYachts.find(
        likedYacht => likedYacht._id === this.yacht._id
      );
    },
    showStars() {
      this.averag = this.getAverageReviews;
      var stars = "";
      var emptyStar = 5 - this.average;
      //FULL STARS
      while (this.average > 0.5) {
        stars += '<img src="/img/icons/star.svg"/>';
        this.average--;
      }
      //HALF STAR
      if (this.average === 0.5)
        stars += '<img src="/img/icons/star-half.svg"/>';
      //EMPTY STARS
      while (emptyStar > 0.5) {
        stars += '<img src="/img/icons/star-outline.svg"/>';
        emptyStar--;
      }
      return stars;
      // END
      // OLD HTML star CODE = '&#11088 ';
    },
    getUrlWithYachtId() {
      return "/yacht/" + this.yacht._id;
    }
  }
};
</script>




<style scoped>
.like-it-symbole {
  position: absolute;
  top: -189px;
  right: -93px;
  width: 30px;
  height: 30px;
}

.is-relative.like {
  cursor: pointer;
}

a {
  color: inherit;
}
.score {
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #999;
  color: #999;
}


/* margin: 0px 10px; */

.max-height {
  height: 215px;
}

.img-boat {
  max-width: 20vw;
  min-height: 220px;
  max-height: 225px;
  margin-top: -1.7rem;
}
.img-owner {
  position: absolute;
  left: 48%;
  margin-top: 6%;
}

.img-wrap {
  /* height: auto; */
  overflow: auto;
}
</style>
<template>
  <div class="columns is-12 is-mobile row-shadow">
    <div class="column">
      <!-- image is-4by5 -->
      <div class="container">
        <figure class="image is-relative">
          <img
            :src="getYachtFrontImg"
            class="max-height"
            style="object-fit: cover; overflow: hidden; "
          />
          <!-- the above img src is rendering only when the user scroll 
          and from cloudinery by requsted size with place holder in case we don't have it
          regular img tag was :
          -->
          <!-- <img :src="yacht.imgs[0]" class="img-boat" style="object-fit: fill; overflow: hidden;" /> -->

          <div v-if="loggedInUser">
            <img
              v-if="!like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple-outline.svg"
              alt="you don't like this yacht yet"
              class="like like-it-symbole"
              style="height:10%; width: 10%"
            />
            <img
              v-if="like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple.svg"
              alt="favorite yacht"
              class="like like-it-symbole"
              style="height:10%; width: 10%"
            />
          </div>
        </figure>
      </div>

      <div style="position:relative;"></div>
    </div>

    <!-- TEXT -->
    <router-link
      :to="getUrlWithYachtId"
      class="column is-5 is-hidden-mobile horiznal-shadow"
      style="position: relative;"
    >
      <strong class="title is-4 level-left">{{yacht.name}}</strong>
      <p class="has-gray-text text-start level-left is-small is-hidden-mobile"><b>Description: <br></b>{{yacht.description}}</p><br>
      <p class="has-gray-text text-start level-left is-small is-hidden-mobile"><b>Cabins: <br></b>{{yacht.cabin}}</p><br>
      <p class="has-gray-text text-start level-left is-small is-hidden-mobile"><b>Type: <br></b>{{yacht.type}}</p>
      <!-- <small> {{yacht.type}} {{yacht.cabins}} </small> -->

      <!-- THE FACILITES -->
      <!-- <filterFacilities v-for="(facility, idx) in yacht.facilities" :key="idx" class="facility" :facility="facility"/> -->

      <figure class="image is-48x48" style="display:flex; position: absolute;  bottom: 14px;">
        <img class="level-left level-item is-rounded is-hidden-mobile" :src="getOwnerImg" />
        <!-- <img class="level-left level-item is-rounded" :src="yacht.owner.img" /> -->
        <br />
        <p
          class="level-left level-item has-text-grey margin-1rem is-hidden-mobile"
        >{{yacht.owner.name}}&nbsp;&nbsp;&nbsp;</p>
        <p class="level-left level-item is-hidden-mobile">
          <span>
            <b>{{yacht.location.country}},&nbsp; {{yacht.location.city}}</b>
          </span>
        </p>
      </figure>
    </router-link>

    <!-- REVIEWS AND PRICE -->
    <router-link :to="getUrlWithYachtId" class="column is-3">
      <div class="media is-boxed has-bullet-separator" style="text-align: center">
        <div>
          <p class="price-per-night">
            {{yacht.pricePerNight}}$ Per Night
            <br />
          </p>

          <reviews-Stars :reviews="this.yacht.reviews" />

          <router-link
            :to="getUrlWithYachtId"
            class="button is-primary is-hidden-mobile is-3 margin-min"
          >Sail Away!</router-link>
        </div>
      </div>
    </router-link>

    <!-- END columns -->
  </div>
</template>

<script>
import utillservice from "@/services/utill.service";
import reviewsStars from "@/components/general/ReviewsStars";
import filterFacilites from "@/components/yacht/filterFacilities";
// import Swal from "sweetalert2";
export default {
  components: { reviewsStars, filterFacilites },
  name: "YachtPreview",
  props: ["yacht", "loggedInUser", "likedYachts"],
  data() {
    return {
      isShowImg: false,
      observer: null,
      avrage: "",
      likedYacht: {
        _id: "",
        name: "",
        img: "",
        isLiked: false
      }
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // console.log(this.$el);
        this.isShowImg = true
      }
    });
    this.observer.observe(this.$el);
  },
  methods: {
    likeClicked() {
      var foundLikedYacht = this.likedYachts.find(likedYacht => {
        return likedYacht._id === this.yacht._id;
      });
      if (foundLikedYacht) {
        let cpyFoundLikedYacht = { ...foundLikedYacht };
        cpyFoundLikedYacht.isLiked = false;
        this.$emit("emitUpdateLikedYacht", cpyFoundLikedYacht);
      } else {
        let newlikedYacht = { ...this.likedYacht };
        newlikedYacht._id = this.yacht._id;
        newlikedYacht.name = this.yacht.name;
        newlikedYacht.img = this.yacht.imgs[0];
        newlikedYacht.isLiked = true;
        this.$emit("emitUpdateLikedYacht", newlikedYacht);
      }
    }
  },
  computed: {
    like() {
      return this.likedYachts.find(
        likedYacht => likedYacht._id === this.yacht._id
      );
    },

    getUrlWithYachtId() {
      return "/yacht/" + this.yacht._id;
    },
    getYachtFrontImg() {
      // console.log('img not loaded');
      if (!this.isShowImg) return;
      // console.log('img loaded');
      

      const cloudName = "ocean-yachts";
      const uploadPreset = "upload";
      const sourceImage = this.yacht.imgs[0];
      const settings = "w_450";
      const placeholder = "https://bulma.io/images/placeholders/256x256.png";
      const newImageUrl = utillservice.getImgCloudinary(
        cloudName,
        sourceImage,
        placeholder,
        settings,
        uploadPreset
      );
      return newImageUrl;
      // OUTPUT EXAMPLE :
      // https://res.cloudinary.com/ocean-yachts/image/upload/v1563712228/Yacths/The%20Blue%20Wave/5_onguhp.jpg
    },
    getOwnerImg() {
      if (!this.isShowImg) return;

      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.yacht.owner.img;
      const settings = "w_48,h_48";
      const placeholder = "https://bulma.io/images/placeholders/48x48.png";
      const newImageUrl = utillservice.getImgCloudinary(
        cloudName,
        sourceImage,
        placeholder,
        settings,
        uploadPreset
      );
      return newImageUrl;
      // https://res.cloudinary.com/dopdel26f/image/upload/v1563460765/Users/Itay/IMG-20190531-WA0015_kwkbib.jpg"
    }
  }
};
</script>
<style scoped>
.facillity {
  width: 6% !important;
}
.like-it-symbole {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  bottom: 7px;
  /* float: right; */
  /* left: 82%; */
  /* padding: 10px; */
  /* padding: 10px; */
}

.is-relative.like {
  cursor: pointer;
}

a {
  color: inherit;
}
/* margin: 0px 10px; */
.max-height {
  height: 25vh;
  /* height: minmax(175px,1fr); */
}
@media only screen and (max-width: 600px) {
  .max-height {
    height: inherit;
  }
}
.star {
  width: 15% !important;
  height: 15% !important;
}
/* NO USE FOR NOW*/
.img-boat {
  /* max-width: 20vw; */
  min-height: 220px;
  max-height: 225px;
  /* margin-top: -1.7rem; */
}
</style>
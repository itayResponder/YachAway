<template>
  <div class="columns is-12 is-mobile row-shadow margin-bottom-3rem">
    <div class="column is-one-third">
      <!-- image is-4by5 -->
      <div class="container">
        <figure class="image is-relative">
          <img
            :src="getYachtFrontImg"
            class
            style="object-fit: cover; overflow: hidden; height: 22vw;"
          />
          <!-- <img :src="yacht.imgs[0]" class="img-boat" style="object-fit: fill; overflow: hidden;" /> -->

          <div v-if="loggedInUser">
            <img
              v-if="!like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple-outline.svg"
              alt="you don't like this yacht yet"
              class="like like-it-symbole"
              style="height:30px; width: 30px"
            />
            <img
              v-if="like"
              @click="likeClicked"
              src="@/assets/icons/heart-multiple.svg"
              alt="favorite yacht"
              class="like like-it-symbole"
              style="height:30px; width: 30px"
            />
          </div>
        </figure>
      </div>

      <div style="position:relative;"></div>
    </div>

    <!-- TEXT -->
    <router-link
      :to="getUrlWithYachtId"
      class="column is-5 horiznal-shadow"
      style="position: relative;"
    >
      <strong class="title is-4 level-left margin-top-2rem">{{yacht.name}}</strong>
      <p class="has-gray-text text-start level-left is-small">{{yacht.description}}</p>

      <!-- THE FACILITES -->

      <figure class="image is-48x48" style="display:flex; position: absolute;  bottom: 14px;">
        <img class="level-left level-item is-rounded is-hidden-mobile" :src="getOwnerImg" />
        <!-- <img class="level-left level-item is-rounded" :src="yacht.owner.img" /> -->
        <br />
        <p
          class="level-left level-item has-text-grey margin-min is-hidden-mobile"
        >{{yacht.owner.name}}&nbsp;&nbsp;&nbsp;</p>
        <p class="level-left level-item is-hidden-mobile">
          <span>
            <b>{{yacht.location.country}},&nbsp; {{yacht.location.city}}</b>
          </span>
        </p>
      </figure>
    </router-link>

    <!-- REVIEWS AND PRICE -->
    <div class="column">
      <div class="media is-boxed has-bullet-separator" style="text-align: center">
        <div>
          <p class="price-per-night">
            {{yacht.pricePerNight}} $
            <br />
          </p>

          <showReviewsStars :reviews="this.yacht.reviews" />

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
import utillservice from "@/services/utill.service";
import showReviewsStars from "@/components/general/showReviewsStars";
// import Swal from "sweetalert2";
export default {
  components: { showReviewsStars },
  name: "YachtPreview",
  props: ["yacht", "loggedInUser", "likedYachts"],
  data() {
    return {
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
      // const apiKey = "518953374957666";
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
.like-it-symbole {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  float: left;
  top: 7px;
  left: 85%;
  /* padding: 10px; */
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
  height: 22vh;
}

.img-boat {
  /* max-width: 20vw; */
  min-height: 220px;
  max-height: 225px;
  /* margin-top: -1.7rem; */
}
.margin-bottom-3rem {
  margin-bottom: 3rem;
}
.img-wrap {
  /* height: auto; */
  overflow: auto;
}
</style>
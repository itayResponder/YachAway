<template>
  <!-- mobile-->
  <!-- desktop-->
  <header class="hero is-large is-fullheight-with-navbar-desktop">
    <!-- <section class="hero-video"> -->
    <section class="has-bg-img">
      <!-- class="is-hidden-mobile" -->
      <!-- <video
        poster="https://res.cloudinary.com/nivb/image/upload/v1562845570/hero/motor_yachts_lil9cp.jpg"
        id="bgvid"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          src="https://res.cloudinary.com/dopdel26f/video/upload/v1563442703/video/www.kizoa.com_y2mate.com_-_my_aspire_51m_video_OlXpmcyvPFE_1080p_exaq4d.mp4"
          type="video/mp4"
        />
      </video>-->

      <div class="hero-head">
        <my-header :loggedInUser="loggedInUser" />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered is-medium">
          <div id="location-search-input">
            <div class="input-group">
              <vue-google-autocomplete
                class="search-query form-control"
                ref="address"
                :country="['es','it','fr','gr']"
                id="map"
                placeholder="PIck Destination"
                v-on:placechanged="getAddressData"
              ></vue-google-autocomplete>
              <!-- <input ref="autocomplete" onfocus value='' type="text" class="search-query" placeholder="Your next vacation" @keydown.enter="search" /> -->
            </div>
          </div>
          <span class="is-invisible">{{showYachtCity}}</span>
          <!-- <p class="subtitle has-text-white">FEEL LIKE HOME AWAY FROM HOME</p> -->

          <!-- popular tags -->
          <div class="is-inline-flex" style="padding-top:1rem;">
            <p
              class="has-text-white is-capitalized"
              style="padding-right:1rem; font-size:1.3rem;"
            >popular:</p>
            <div class="tags">
              <!--maybe add to the above class for mobile ??:  field is-grouped is-grouped-multiline -->
              <router-link
                to="yachts/italy"
                class="tag tag-size is-capitalized button is-outlined is-white"
              >italy</router-link>
              <router-link
                to="yachts/spain"
                class="tag tag-size is-capitalized button is-outlined is-white"
              >spain</router-link>
              <router-link
                to="yachts/france"
                class="tag tag-size is-capitalized button is-outlined is-white"
              >france</router-link>
              <router-link
                to="yachts/greece"
                class="tag tag-size is-capitalized button is-outlined is-white"
              >greece</router-link>
              <span class="tag tag-size is-capitalized is-primary">{{yachtsCount}} yachts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- </section> -->
  </header>
</template>

<script>
import myHeader from "@/components/sitecross/MyHeader";
// import GeocodeService from "@/services/geocode.service.js";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  props: ["loggedInUser"],
  data() {
    return {
      countryCode: null
    };
  },
  mounted() {
    this.$refs.address.focus();
  },
  components: {
    VueGoogleAutocomplete,
    myHeader
  },
  methods: {
    /*
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    async getAddressData(addressData, placeResultData) {
      try {
        //  this.addressData = await addressData
        this.placeResultData = await placeResultData;
        this.countryCode = await placeResultData.address_components[4]
          .short_name;
      } catch (err) {
        const errMsg = "GOT PROBLEMS WITH GOOGLE MAP";
        console.log(errMsg, " : ", err);
      }
    }
  },
  computed: {
    yachtsCount() {
      var count = "3,183";
      return count;
    },
    showYachtCity() {
      if (!this.countryCode) return;

      var country;
      switch (this.countryCode.toUpperCase()) {
        // case "AU":
        //   country = "australia";
        //   break;
        case "IT":
          country = "italy";
          break;
        case "ES":
          country = "spain";
          break;
        // case "FR":
        //   country = "france";
        //   break;
        case "GR":
          country = "greece";
          break;
        //default
        default:
          country = "";
      }

      const url = "/yachts/" + country;
      setTimeout(this.$router.push(url), 200);
    }
  }
};
</script>

<style scoped>
@media (min-width: 960px) {
  .tag-size {
    font-size: 1rem;
  }
}
.tag-size {
  font-size: 0.7rem;
}
</style>


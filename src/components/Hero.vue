<template>
  <!-- mobile-->
  <!-- desktop-->
  <header class="hero is-large is-fullheight-with-navbar">
    <section class="hero-video">
      <section class="has-bg-img">
        <!-- <video
        class="is-hidden-mobile"
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
          <div class="container has-text-centered">
            <div id="custom-search-input">
              <div class="input-group">
                <!-- TODO : WORK ON  SEARCH BY GOOGLE WITH PUSH  @change="showYachtCity" -->

                <vue-google-autocomplete
                  class="search-query form-control"
                  ref="address"
                  id="map"
                  placeholder="PIck Destination"
                  v-on:placechanged="getAddressData"
                ></vue-google-autocomplete>
                <!-- <input ref="autocomplete" onfocus value='' type="text" class="search-query" placeholder="Your next vacation" @keydown.enter="search" /> -->
              </div>
            </div>

            <p class="subtitle has-text-white">FEEL LIKE HOME AWAY FROM HOME</p>
          </div>
        </div>
      </section>
    </section>
  </header>
</template>

<script>
import myHeader from "@/components/MyHeader";
// import GeocodeService from "@/services/geocode.service.js";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  props: ["loggedInUser"],
  mounted() {
    this.$refs.address.focus();
  },
  components: {
    VueGoogleAutocomplete,
    myHeader
  },
  methods: {
	  // ON WORK :
    showYachtCity() {
      console.log("test city search");
      this.$route.push("/yachts");
      //   this.address
    },
    /*
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData;
    }
  },
  computed: {}
};
</script>

<style>
.hero-video video {
  position: relative;
  left: auto;
  top: auto;
  transform: none;
  object-fit: cover;
}
.hero-head {
  z-index: 5;
}
.has-bg-img {
  background-image: url("https://res.cloudinary.com/nivb/image/upload/v1562845570/hero/motor_yachts_lil9cp.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

#custom-search-input .search-query {
  width: 650px;
  padding: 15px 30px;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.75);
  font-weight: 600;
  color: #444;
}
.hero-video {
  overflow: auto;
}
</style>


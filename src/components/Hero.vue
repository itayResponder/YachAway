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
                  :country="['es','it','fr','gr']"
                  id="map"
                  placeholder="PIck Destination"
                  v-on:placechanged="getAddressData"
                ></vue-google-autocomplete>
                <!-- <input ref="autocomplete" onfocus value='' type="text" class="search-query" placeholder="Your next vacation" @keydown.enter="search" /> -->
              </div>
            </div>
            {{showYachtCity}}
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
    async getAddressData(addressData, placeResultData, id) {
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
    showYachtCity() {
      if (!this.countryCode || this.countryCode.length < 2 ) return;
      
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
      setTimeout(this.$router.push(url), 450);
    }
  }
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


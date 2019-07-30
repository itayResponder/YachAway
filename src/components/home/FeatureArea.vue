<template>
  <div class="hero-body mobile is-paddingless is-relative">
    <!-- <img alt="" src="../assets/img/yacht-1280x720.jpg" style="width: 100%; height: 343px; object-fit: cover; object-position: left center;"> -->
    <img
      alt
      src="https://res.cloudinary.com/ocean-yachts/image/upload/w_1080/Yacths/optional%20for%20mobile/7_qewfrv.jpg"
      class="is-cover"
      style="width: 100%; height: 600px; object-position: left center;"
    />
    <div class="hero-body">
      <div class="container has-text-centered">
        <p
          class="title has-text-white button is-primary is-medium is-capitalized is-relative"
          style="top:-50vh; "
        >
          list your yacht
          <!-- <span class="icon is-medium"><i class="mdi mdi-chevron-right mdi-36px"></i></span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowImg: false,
      observer: null
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // console.log(this.$el);
        this.isShowImg = true;
      }
    });
    this.observer.observe(this.$el);
  },
  computed: {
    getFeturedImg() {
      // console.log('img not loaded');
      if (!this.isShowImg) return;
      // console.log('img loaded');

      const cloudName = "ocean-yachts";
      const uploadPreset = "upload";
      const sourceImage =
        "https://res.cloudinary.com/ocean-yachts/image/upload/w_1080/Yacths/optional%20for%20mobile/7_qewfrv.jpg";
      const settings = "w_1080";
      const placeholder = "https://bulma.io/images/placeholders/256x256.png";
      const newImageUrl = utillservice.getImgCloudinary(
        cloudName,
        sourceImage,
        placeholder,
        settings,
        uploadPreset
      );
      return newImageUrl;
    }
  }
};
</script>
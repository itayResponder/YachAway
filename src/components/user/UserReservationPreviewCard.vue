<template>
  <section class="is-inline-flex">
    <div class="card-image">
      <figure class="image is-1by4">
        <img
          :src="getYachtImg"
          style="max-width:20vw; max-height:200px; object-fit: contain;"
          alt="Your reserved yacht image"
        />
      </figure>

      <p class="title is-4">{{reservation.yacht.name}}</p>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- <div class="media-left ">
          <figure class="image  is-48x48">
            <img class="is-rounded" :src="getYachtOwnerImg" alt="Yacht image" />
          </figure>
          <p class="subtitle is-6 is-capitalized">
            {{reservation.yacht.owner.name}}
            <br/>
            the owner
            
          </p>

        </div>-->
        <div class="content">
          <a class="subtitle is-6">email: {{reservation.yacht.owner.email}}</a>
          <p>
            From: {{reservation.fromDate}} &nbsp;&nbsp;
            <br />
            <span>To: {{reservation.toDate}}</span>
            <br />
            <span>Guests Allowed: {{reservation.numOfGuest}}</span>
            <br />
            <span>Price Per Night: {{reservation.yacht.pricePerNight}}$</span>
          </p>
          <p>
            <span>reserved {{+reservation.createdAt | moment("from","now")}}</span>
            <br />
            <span>on the {{+reservation.createdAt | moment(" MMMM Do YYYY")}}</span>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import utillservice from "@/services/utill.service";

export default {
  props: ["reservation"],
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
    getYachtImg() {
      if (!this.isShowImg) return;

      const cloudName = "ocean-yachts";
      const uploadPreset = "upload";
      const sourceImage = this.reservation.yacht.img;
      const settings = "w_640";
      const placeholder = "https://bulma.io/images/placeholders/256x256.png";
      const newImageUrl = utillservice.getImgCloudinary(
        cloudName,
        sourceImage,
        placeholder,
        settings,
        uploadPreset
      );
      return newImageUrl;
    },
    getYachtOwnerImg() {
      if (!this.isShowImg) return;

      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.reservation.yacht.owner.img;
      const settings = "w_128,h_128";
      const placeholder = "https://bulma.io/images/placeholders/48x48.png";
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

<style>
</style>

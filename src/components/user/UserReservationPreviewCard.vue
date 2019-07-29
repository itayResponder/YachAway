<template>
  <section>
    <div class="card-image">
      <figure class="image is-1by4">
        <p class="title is-4">{{reservation.yacht.name}}</p>
        <img
          :src="getYachtImg"
          style="max-width:50vw; max-height:300px; object-fit: contain;"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="getYachtOwnerImg" alt="Yacht image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Owner name: {{reservation.yacht.owner.name}}</p>
          <a class="subtitle is-6">Owner email: {{reservation.yacht.owner.email}}</a>
          <p>From: {{reservation.fromDate}}</p>
          <p>To: {{reservation.toDate}}</p>
          <p>Number Of Guests: {{reservation.numOfGuest}}</p>
          <p>Price Per Night: {{reservation.yacht.pricePerNight}}$</p>
        </div>
      </div>

      <div class="content">
        <br />
        <span>
          <b>Created: {{+reservation.createdAt | moment("dddd, MMMM Do YYYY")}}</b>
          <b>Before: {{+reservation.createdAt | moment("from","now")}}</b>
        </span>
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

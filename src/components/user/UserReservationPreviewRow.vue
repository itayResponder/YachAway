<template>
  <div class="columns is-12 is-mobile row-shadow">
    <div class="column">
      <!-- image is-4by5 -->
      <div class="container">
        <figure class="image is-relative">
          <img :src="getYachtImg" class="max-height" style="object-fit: cover; overflow: hidden; " />
        </figure>

        <figure class="image is-48x48" style="display:flex; position: absolute;  bottom: 14px;">
          <img class="level-left level-item is-rounded is-hidden-mobile" :src="getYachtOwnerImg" />
          <!-- <img class="level-left level-item is-rounded" :src="yacht.owner.img" /> -->
          <br />
          <p
            class="level-left level-item has-text-grey is-hidden-mobile margin-1rem"
          >{{reservation.yacht.owner.name}}&nbsp;
          (The Owner)
          
          </p>
        </figure>

        <div class="is-hidden-mobile">
          <br />
          <br />
          
        </div>
        
      </div>

      <!-- <div style="position:relative;"></div> -->
    </div>

    <!-- TEXT -->
    <div class="column is-7 horiznal-shadow text-start" >
      <p class="is-4 ">Reservation: &nbsp;
      <strong class="title is-4">{{reservation.yacht.name}}</strong>
      </p>

        <span>reserved on the {{+reservation.createdAt | moment(" MMMM Do YYYY")}}</span>
      <span>.&nbsp;&nbsp;</span>
        <span>{{+reservation.createdAt | moment("from","now")}}</span>
      

      <!--DETAILS -->
      <div class="has-gray-text text-start is-medium is-capitalized">
        <br />
        check in {{reservation.fromDate | moment(" MMMM Do YYYY")}} &nbsp;&nbsp;
        <br />
        <span>check out {{reservation.toDate | moment(" MMMM Do YYYY")}}</span>
        <br />
        <span>Guests Allowed: {{reservation.numOfGuest}}</span>
        <br />
        <span>Price Per Night: {{reservation.yacht.pricePerNight}}$</span>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="column is-2 is-mobile-hidden">
      <div class="media has-bullet-separator" style="text-align: center">
        <!-- buttons -->
        <div class="buttons">
          <button class="is-capitalized is-outlined is-danger button is-small">cancel</button>
          <button class="is-capitalized is-outlined is-info button is-small">request to change</button>
          <button class="is-capitalized is-outlined button is-small">pay</button>
          <a :href="getOwnerEmail" class="is-capitalized is-outlined button is-small">contact owner</a>
          <!-- end buttons -->
        </div>
      </div>
    </div>
    <!-- END columns -->
  </div>
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
    },
    getOwnerEmail() {
      return `mailto://${this.reservation.yacht.owner.email}`;
    }
  }
};
</script>

<template>
  <div class="container">
    <!-- <div class="card-image">
			<figure class="image is-4by3">
				<img v-if="reservation" :src="reservation.yacht.img" alt="Placeholder image" />
			</figure>
    </div>-->
    <div class="is-inline-block">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="getUserImg" alt="guest image" />
          </figure>
        </div>
        <div class="media-title">
          <p class>
            <span class="title is-5">{{reservation.user.name}} is arriving</span>
            <span class="subtitle is-6">
              &nbsp; to &nbsp;
              {{reservation.yacht.name}}
            </span>
            <br />
            <span class="subtitle is-6">
              <time class="subtitle" datetime="2016-1-1">{{reservation.fromDate}}</time>
              till
              <time class="subtitle" datetime="2016-1-1">{{reservation.toDate}}</time>
            </span>
          </p>
        </div>
      </div>

      <div class="content">
        <!-- {{reservation}} -->
        <br />

        <div class="is-flex">
          <b-button
            @click="approveUser"
            type="button field is-primary"
            class="has-text-justified"
          >Approve</b-button>
          <div class="margin-min"></div>
          <b-button
            type="button field is-outline"
            @click="declineUser"
            class="has-text-justified"
          >Decline</b-button>
        </div>
      </div>
    </div>
    <div class="margin-2rem"></div>
  </div>
</template>

<script>
import utillservice from "@/services/utill.service";

export default {
  props: ["reservation"],
  data() {
    return {
      replyToUserFromOwner: null,
      isShowImg: false,
      observer: null
    };
  },
  mounted() {
    this.replyToUserFromOwner = this.reservation.user;
    this.replyToUserFromOwner.reservationId = this.reservation._id;

    //LAZY LOAD
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // console.log(this.$el);
        this.isShowImg = true;
      }
    });
    this.observer.observe(this.$el);
    // END LAZY LOAD
  },
  methods: {
    approveUser() {
      this.replyToUserFromOwner.isReply = true;
      this.$emit("replyToUserFromOwner", this.replyToUserFromOwner);
    },
    declineUser() {
      replyToUserFromOwner.isReply = false;
      this.$emit("replyToUserFromOwner", this.replyToUserFromOwner);
    }
  },
  computed: {
    getUserImg() {
      if (!this.isShowImg) return;

      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.reservation.user.img;
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
.card {
  width: 30%;
  margin-bottom: 50px;
}
.card:hover {
  box-shadow: 0 0 15px 2px black;
  transition: 0.3s;
}
</style>

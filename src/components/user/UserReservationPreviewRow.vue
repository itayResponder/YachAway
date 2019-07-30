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
          <p class="level-left level-item has-text-grey is-hidden-mobile margin-1rem">
            {{reservation.yacht.owner.name}}&nbsp;
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
    <div class="column is-6 horiznal-shadow text-start">
        <!-- <tbody> -->
          <p class="near-table">
            <!-- <td style="width:100%;"> -->
                Reservation: &nbsp;
                 <strong class="title is-4">{{reservation.yacht.name}}</strong>
<br/>             
        reserved on the {{+reservation.createdAt | moment(" MMMM Do YYYY")}}
          <span>,&nbsp;&nbsp;</span>
            {{+reservation.createdAt | moment("from","now")}}
            <!-- </td> -->
          </p>
        <!-- </tbody> -->

        <!--DETAILS -->
      <table>
        <tbody class="has-gray-text text-start is-medium is-capitalized">
          <tr>
            <td>check in</td>
            <td>{{reservation.fromDate | moment(" MMMM Do YYYY")}}</td>
          </tr>
          <tr>
            <td>check out</td>
            <td>{{reservation.toDate | moment(" MMMM Do YYYY")}}</td>
          </tr>
          <tr>
            <td>Guests Allowed</td>
            <td>{{reservation.numOfGuest}}</td>
          </tr>
          <tr>
            <td>Price Per Night:</td>
            <td>{{reservation.yacht.pricePerNight}}$</td>
          </tr>
        </tbody>
      </table>
      <!-- </div> -->
    </div>

    <!-- RIGHT SIDE -->
    <div class="column is-3 is-mobile-hidden">
      <div class="media has-bullet-separator" style="text-align: center">
        <!-- buttons -->
        <div class="buttons is-capitalized is-fullwidth is-outlined">
          <button class="button">pay</button>
          <a :href="getOwnerEmail" class="is-capitalized is-outlined button">email owner</a>
          <a target="_blank" :href="getWhatsappLink" class="button is-button">
            <span class="icon is-left">
              <img src="@/assets/icons/whatsapp.svg" alt="whatsapp" />
              &nbsp; &nbsp;
            </span>
            What'sapp owner
          </a>
          <button
            class="button is-button-link has-text-link is-small"
            @click="showMoreButtons = !showMoreButtons"
          >{{getShowMoreText}}</button>
          <div @click="showMoreButtons = !showMoreButtons" v-show="showMoreButtons">
            <button class="is-outlined is-danger button is-small">cancel</button>
            <button class="is-outlined is-info button is-small">request to change</button>
          </div>
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
      observer: null,
      showMoreButtons: false
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
    getShowMoreText() {
      if (!this.showMoreButtons) return "Show More";
      else return "Hide";
    },
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
    },
    // TODO - GET USER PHONE BY AGGREGATION
    getWhatsappLink() {
      if (!this.yacht || !this.yacht.owner || !this.yacht.owner.name)
        return false;
      const api = "https://api.whatsapp.com/send?l=en";
      const txt = `Hi! I'm interested in one of your Yachts, specifically in : ${this.yacht.name}`;
      // for now we not load it from DB :
      let phone = "";
      // for now we not load it from DB :
      if (this.yacht.owner.name.toLowerCase() === "niv") phone = "972548082717";
      else if (this.yacht.owner.name.toLowerCase() === "nadav")
        phone = "972523831348";
      else if (this.yacht.owner.name.toLowerCase() === "itay")
        phone = "972507161645";
      else phone = "972548082717"; // DOTO DELETE FOR DEMONSTARTION PERPUSE

      this.phoneContactText = "Contact";
      const whatsappLink = encodeURI(`${api}&phone=${phone}&text=${txt}`);
      return whatsappLink;
    }
  }
};
</script>
<style scoped>
table td {
  vertical-align: bottom;
}
td,  p.near-table {
  padding: 10px;
  /* width :150px */
}
</style>

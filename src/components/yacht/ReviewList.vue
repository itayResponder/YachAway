<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-48x48">
        <!-- slot img url -->
        <img class="is-rounded" :src="getOwnerImg" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <!-- slot name -->
          <strong>{{review.name}}</strong>
          <br />
          <!-- slot date -->
          <!-- <small>{{review.createdAt | moment("dddd ,MMMM Do YYYY ") }}</small> -->
          <small>{{+review.date | moment("from","now") }}</small>
          <br />
          <!-- slot review -->
          {{review.description || defualtReview }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import utillservice from "@/services/utill.service";
export default {
  name: "review-list",
  props: ["review"],
  data() {
    return {
      defualtReview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis."
    };
  },
  computed: {
    getOwnerImg() {
      const cloudName = "dopdel26f";
      const uploadPreset = "upload";
      const sourceImage = this.review.img;
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
    }
  }
};
</script>

<style>
</style>

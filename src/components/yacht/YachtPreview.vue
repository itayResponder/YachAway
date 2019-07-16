<template>
  <article @onclick="test" class="media">
    <figure class="media-left">
      <p class="image">
        <img :src="yacht.imgs[0]" style="max-width:20vw; max-height:160px; object-fit: cover;" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong class="title is-4">{{yacht.name}}</strong>
        <p
          class="has-gray-text is-small"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        <!-- </div> -->
      </div>

      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="image is-32x32 margin-min">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
            <small>{{yacht.owner.userFirstName}}</small>

            <!-- facilites -->
          </div>
        </div>
      </nav>
    </div>

    <!-- Reviews and Price -->
    <div class="media is-boxed has-bullet-separator" style="text-align: center">
      <div>
        <p
          style="font-size: 2rem; font-family: Montserrat,Arial,sans-serif;"
        >{{yacht.reviews.score}}</p>
        <small class="has-text-grey">{{numberOfReviews}} Reviews</small>
        <router-link to="yacht/details" class="button is-info is-6 margin-min">Show Prices</router-link>
      </div>
    </div>
  </article>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "YachtPreview",
  props: ["yacht"],
  data() {
    return {};
  },
  methods: {
	  test(){
		  console.log('CLICKED')
	  }
  },
  computed: {
    numberOfReviews() {
      return 1;
    }
  }
};
</script>

<style scoped>
.score {
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #999;
  color: #999;
}
.margin-min {
  margin: 1rem;
}
/* CSS OF NIV  ---- FOR DEBUG */
/* *:not(path):not(g) {
	color: hsla(210, 100%, 100%, 0.9) !important;
	background: hsla(210, 100%, 50%, 0.5) !important;
	outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
	box-shadow: none !important;
} */
</style>
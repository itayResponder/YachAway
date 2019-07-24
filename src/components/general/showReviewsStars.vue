<template>
  <section>
    <span v-html="showStars"></span>
    <br />
    <small class="is-center is-clearfix has-text-grey">{{getNumberOfReviews}} Reviews</small>
  </section>
</template>

<script>
export default {
  created() {},
  props: ["reviews"],
  data() {
    return {
      average: null,
      stars: ""
    };
  },
  methods: {},
  computed: {
    getNumberOfReviews() {
      return this.reviews.length;
    },

    showStars() {
      //calcAvg
      const length = this.reviews.length;
      var sum = 0;
      this.reviews.forEach(review => {
        sum += review.score || 1;
      });
      var average = sum / length;
      // end calcAvg

      var emptyStar = 5 - average;
      var stars = "";

      //FULL STARS
      while (average > 0.5) {
        stars += '<img width="20" src="/img/icons/star.svg"/>';
        average--;
      }
      //HALF STAR
      if (average === 0.5) stars += '<img  width="20" src="/img/icons/star-half.svg"/>';
      //EMPTY STARS
      while (emptyStar > 0.5) {
        stars += '<img  width="20" src="/img/icons/star-outline.svg"/>';
        emptyStar--;
      }
      return stars;
      // END
      // OLD HTML star CODE = '&#11088 ';
    }
  }
};
</script>

<style>
</style>

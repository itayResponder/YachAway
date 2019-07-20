
<template>
  <section>
    <h1 class="is-size-1">{{cityName}}</h1>

    <b-button type="button field  is-white" @click="isGrid=!isGrid">
      <img v-show="isGrid" type="has-text-grey-light" src="@/assets/icons/view-list.svg" alt="list" />
    </b-button>
    <b-button type="button field is-white" @click="isGrid=!isGrid">
      <img v-show="!isGrid" class="is-info" src="@/assets/icons/grid.svg" alt="grid" />
    </b-button>


    <div class="columns is-multiline is-mobile" v-show="!isGrid">
      <yacht-filter class="column is-one-fifth is-hidden-mobile	is-3" @set-filter="setFilter"></yacht-filter>
      <div></div>
      <yacht-List class="column" :likedYachts="likedYachts" @emitLikedYacht="emitLikedYacht" :yachts="yachts"></yacht-List>
    </div>

    <yacht-grid :yachts="yachts" v-show="isGrid"></yacht-grid>

  </section>
</template>

<script>
import YachtList from "@/components/yacht/YachtList";
import YachtGrid from "@/components/yacht/YachtGrid";
import YachtFilter from "@/components/yacht/YachtFilter";

export default {
  name: "YachtApp",
  data() {
    return {
      isGrid: false,
      newYacht: ""
    };
  },
  async created() {
    console.log("yachtApp liked:", this.$store.getters.likedYachts);
    this.likedYachts = this.$store.getters.likedYachts;
    try {
      const yachts = await this.$store.dispatch({
        type: "loadYachts",
        owner: {}
      });
    } catch (err) {
      console.log("Could not load yachts error:", err);
    }
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit("setFilter", filterBy);
    },
    async emitLikedYacht(likedYacht) {
      likedYacht.userId = this.$store.getters.userLoggedIn._id;
      console.log("yachtApp likedYacht:", likedYacht);
      try {
        const user = await this.$store.dispatch({
          type: "setLikedYacht",
          likedYacht: likedYacht
        });
      } catch (err) {
        console.log("Coudlnt update user likedYacht error:", err);
      }
    }
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsToShow;
    },

    // likedYachts() {
    //   return this.$store.getters.likedYachts;
    // },

    cityName() {
      return this.$route.name.city || "Italy, Venice";
    }
  },
  components: {
    YachtList,
    YachtGrid,
    YachtFilter
  }
};
</script>

<style>
</style>


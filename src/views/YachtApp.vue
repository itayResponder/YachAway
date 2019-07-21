
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
      <yacht-filter class="column is-one-fifth is-hidden-mobile is-3" @set-filter="setFilter"></yacht-filter>
      <div></div>
      <yacht-List
        class="column"
        :loggedInUser="loggedInUser"
        @emitUpdateLikedYacht="emitUpdateLikedYacht"
        :yachts="yachts"
      ></yacht-List>
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

    async emitUpdateLikedYacht(updateLikedYachts) {  
      updateLikedYachts.userId = this.$store.getters.userLoggedIn._id;
      try {
        const updatedUser = await this.$store.dispatch({type: "updateUserLikedYachts", updateLikedYachts})
      } catch (err) {
        console.log("Coudlnt update user updateLikedYachts error:", err);
      }
    }
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsToShow;
    },

    loggedInUser() {
      return this.$store.getters.userLoggedIn;
    },

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



<template>
  <section class="has-background-white-bis">
    <h1 class="is-size-1 is-capitalized">{{cityName}}</h1>

    <b-button type="button field  is-white" @click="isGrid=!isGrid">
      <img aria-disabled="isGrid" type="has-text-grey-light" src="@/assets/icons/view-list.svg" alt="list" />
    </b-button>
    <b-button type="button field is-white" @click="isGrid=!isGrid">
      <img  aria-disabled="!isGrid" class="is-info" src="@/assets/icons/grid.svg" alt="grid" />
    </b-button>

    <div class="columns is-multiline is-mobile" v-show="!isGrid">
      <yacht-filter class="column has-background-white" @set-filter="setFilter"></yacht-filter>
      <!-- <div class=" gap"></div> -->
      <yacht-List
        class="column"
        :loggedInUser="loggedInUser"
        :likedYachts="likedYachts"
        @emitUpdateLikedYacht="emitUpdateLikedYacht"
        :yachts="yachts"
      ></yacht-List>
    </div>

    <yacht-grid :yachts="yachts" v-show="isGrid"></yacht-grid>
  </section>
</template>

<script>
import YachtList from "@/components/yacht/YachtList";
import YachtFilter from "@/components/yacht/YachtFilter";
//lazy load cmp :
const YachtGrid = () =>   import ("@/components/yacht/YachtGrid");

export default {
  name: "YachtApp",
  data() {
    return {
      isGrid: false,
      newYacht: "",
      filter: null
    };
  },
  async created() {
    if (this.loggedInUser) {
      try {
        await this.$store.dispatch({
          type: "loadUserLikedYachts",
          userId: this.$store.getters.userLoggedIn._id
        });
      } catch (err) {
        console.log("Could not load user liked yachts error:", err);
      }
    }
    try {
      if(!this.filter) {
        await this.$store.dispatch({
          type: "loadYachts",
          filterBy: this.filter
        });
      }
    } catch (err) {
      console.log("Could not load yachts error:", err);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    async setFilter(filterBy) {
      this.filter = filterBy;
      try {
        await this.$store.dispatch({
          type: "loadYachts",
          filterBy: filterBy
        });
      } catch (err) {
        console.log("Could not load yachts error:", err);
      }
    },

    async emitUpdateLikedYacht(updateLikedYachts) {
      updateLikedYachts.userId = this.$store.getters.userLoggedIn._id;
      try {
        const updatedUserLikedYachts = await this.$store.dispatch({
          type: "updateUserLikedYachts",
          updateLikedYachts
        });
        return updatedUserLikedYachts;
      } catch (err) {
        console.log("Coudlnt update user updateLikedYachts error:", err);
      }
    },
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsToShow;
    },

    likedYachts() {
      return this.$store.getters.userLikedYachts;
    },

    loggedInUser() {
      return this.$store.getters.userLoggedIn;
    },

    cityName() {
      return this.$route.params.city || "Any Ocean & Sea";
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


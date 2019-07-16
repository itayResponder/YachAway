
<template>
  <!-- <div class="add-filter">
			<div class="add-yachts">
			</div>
  </div>-->
  <section>
    <h1 class="is-size-1">{{cityName}}</h1>

    <b-button type="button field  is-white" @click="isGrid=!isGrid">
      <img type="has-text-grey-light" src="@/assets/icons/view-list.svg" alt="list" />
    </b-button>
    <b-button type="button field is-white" @click="isGrid=!isGrid">
      <img class="is-info" src="@/assets/icons/grid.svg" alt="grid" />
    </b-button>

    <yacht-grid :yachts="yachts" v-show="isGrid"></yacht-grid>

    <div class="container grid" v-show="!isGrid">
      <YachtFilter></YachtFilter>
      <div></div>
      <yacht-List :yachts="yachts"></yacht-List>
      <!-- @set-filter="setFilter"-->
    </div>
  </section>
</template>

<script>
import YachtList from "@/components/yacht/YachtList";
import YachtGrid from "@/components/yacht/YachtGrid";
// import AdminYachtList from "@/components/admin/AdminYachtList";
import YachtFilter from "@/components/yacht/YachtFilter";

export default {
  name: "YachtApp",
  data() {
    return {
      isGrid: false,
      newYacht: ""
    };
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsToShow;
    },
    cityName() {
      return this.$route.name.city || "Unknown City";
    }
  },
  components: {
    YachtList,
    YachtGrid,
    // AdminYachtList,
    YachtFilter
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1rem minmax(224px, 3fr);
}
</style>


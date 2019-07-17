
<template>
	<!-- <div class="add-filter">
			<div class="add-yachts">
			</div>
		 </div> -->
	<section>
		<h1 class="is-size-1"> {{cityName}} </h1>

		<b-button type="button field  is-white" @click="isGrid=!isGrid">
			<img type="has-text-grey-light" src="@/assets/icons/view-list.svg" alt="list" />
		</b-button>
		<b-button type="button field is-wh
		ite" @click="isGrid=!isGrid">
			<img class="is-info" src="@/assets/icons/grid.svg" alt="grid" />
		</b-button>

		<yacht-grid :yachts="yachts" v-show="isGrid"></yacht-grid>

		<div class="container grid" v-show="!isGrid">
			<yacht-filter @set-filter="setFilter"></yacht-filter>
			<div></div>
			<yacht-List :yachts="yachts"></yacht-List>
			<!-- @set-filter="setFilter"-->
		</div>
	</section>
</template>

<script>
import YachtList from "@/components/Yachts/YachtList";
import YachtGrid from "@/components/Yachts/YachtGrid";
import AdminYachtList from "@/components/UserAdmin/AdminYachtList";
import YachtFilter from "@/components/Yachts/YachtFilter";

export default {
	name: "YachtApp",
	data() {
		return {
			isGrid: false,
			newYacht: ""
		};
	},
	methods:{
		  setFilter(filterBy) {
            this.$store.commit('setFilter', filterBy)
        },
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
		AdminYachtList,
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


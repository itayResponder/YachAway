
<template>
	<!-- <div class="add-filter">
			<div class="add-yachts">
			</div>
		 </div> -->
	<section>
		<h1 class="is-size-1"> City Name </h1>

		<div class="container grid">
			<YachtFilter></YachtFilter>
			<div></div>
			<yacht-List :yachts="yachts"></yacht-List>
			<!-- @set-filter="setFilter"-->
		</div>
	</section>
</template>

<script>
import YachtList from "@/components/Yachts/YachtList";
import AdminYachtList from "@/components/UserAdmin/AdminYachtList";
import YachtFilter from "@/components/Yachts/YachtFilter";

export default {
	name: "YachtApp",
	data() {
		return {
			newYacht: ""
		};
	},
	computed: {
		yachts() {
			return this.$store.getters.yachtsToShow;
		}
	},
	components: {
		YachtList,
		AdminYachtList,
		YachtFilter
	}
};
</script>

<style>
.grid {
	display: grid;
	grid-template-columns: 1fr 1.5rem minmax(224px, 5fr);
}
</style>


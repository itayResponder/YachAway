
<template>
	<section>
		<!-- <div class="add-filter">
			<div class="add-yachts">
			</div>
			<YachtFilter @set-filter="setFilter"></YachtFilter> -->
		<!-- </div> -->

		<h1 class="is-size-1"> Some Headline </h1>

		<yacht-List :yachts="yachts"></yacht-List>
	</section>
</template>

<script>
import YachtList from "@/components/Yachts/YachtList";
import AdminYachtList from "@/components/UserAdmin/AdminYachtList";
// import YachtFilter from "@/components/YachtFilter.vue";

export default {
	name: "YachtApp",
	data() {
		return {
			newYacht: ""
		};
	},
	async created() {
		try {
			this.yachts = await this.$store.dispatch("loadYachts");
		} catch {
			console.log("Could not found yachts");
		}
	},
	computed: {
		yachts() {
			return this.$store.getters.yachtsToShow;
		}
	},
	components: {
		YachtList,
		AdminYachtList
		// YachtFilter
	}
};
</script>


<template>
	<section>
		<div class="add-filter">
			<div class="add-yachts">

			</div>
			<!-- <YachtFilter @set-filter="setFilter"></YachtFilter> -->
		</div>

		<YachtList @emitRemoveYacht="removeYacht" :yachts="yachts"></YachtList>
	</section>
</template>

<script>
import YachtList from "@/components/YachtList.vue";
// import YachtFilter from "@/components/YachtFilter.vue";

export default {
	name: "YachtApp",
	data() {
		return {
			yachts: [],
			newYacht: ""
		};
	},
	async created() {
		try {
			this.yachts = await this.$store.dispatch('loadYachts');
		} catch {
			console.log('Could not found yachts')
		}
	},
	methods: {
		removeYacht(yachtId) {
			console.log('yacht app yacht deleted', yachtId)
			// this.$store.dispatch({ type: "removeYacht", yachtId: yachtId });
		}
	},
	// deleteYacht(yachtId) {
	//   this.$store.dispatch({
	//     type: "deleteYacht",
	//     yachtId
	//   });
	// },
	//   setFilter(filterBy) {
	//     this.$store.commit("setFilter", filterBy);
	//   }
	// },

	// computed: {
	//   yachts() {
	//     return this.$store.getters.yachtsToShow;
	//   }
	// },
	components: {
		YachtList
		// YachtFilter
	}
};
</script>

<template>
	<section v-if="yachts">
		<div class="columns ">

		<!-- <div class="columns is-half-desktop"> -->

		<yacht-preview @emitRemoveYacht="removeYacht" v-for="yacht in yachts" :key="yacht._id" :yacht="yacht"></yacht-preview>
		</div>
	</section>
</template>

<script>
// @ is an alias to /src
        // v-for="yacht in yachts"
        // :key="yacht._id"
        // :yacht="yacht"
        // @delete="emitDeleteyacht"
        // @isDone="emitIsDone"
import YachtPreview from "../components/YachtPreview.vue";

export default {
	name: "YachtList",
	props: ["yachts"],

	data() {
		return {};
	},
	created() {
		console.log('YachtList yachts:', this.yachts)
	},

	methods: {
		removeYacht(yachtId) {
			this.$emit("emitRemoveYacht", yachtId);
		},
		emitIsDone(yachtId) {
			this.$emit("isDone", yachtId);
		}
	},
	computed: {},
	components: {
		YachtPreview
	}
};
</script>

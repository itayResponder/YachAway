<template>
	<section v-if="yachts">

		<yacht-preview class="tile is-ancestor" v-for="yacht in yachts" :key="yacht._id" :yacht="yacht">
		</yacht-preview>

	</section>
</template>

<script>
import YachtPreview from "@/components/yachts/YachtPreview";

export default {
	name: "YachtList",
	props: ["yachts"],

	data() {
		return {};
	},
	created() {
		console.log("YachtList yachts:", this.yachts);
	},

	computed: {},
	components: {
		YachtPreview
	}
};
</script>

<style>
</style>

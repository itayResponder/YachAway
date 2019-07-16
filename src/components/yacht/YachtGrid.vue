<template>
	<div class="columns transition is-multiline">
		<yacht-grid-preview class="column is-one-third-desktop is-one-third-tablet " v-for="yacht in yachts" :key="yacht._id" :yacht="yacht">
		</yacht-grid-preview>
	</div>
</template>

<script>
import YachtGridPreview from "@/components/yacht/YachtGridPreview";
export default {
	name: "YachtGrid",
	props: ["yachts"],
	components: {
		YachtGridPreview
	}
};
</script>

<style>
</style>

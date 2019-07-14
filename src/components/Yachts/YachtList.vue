<template>
	<section v-if="yachts">

		<yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht">
		</yacht-preview>

	</section>
</template>

<script>
import YachtPreview from "@/components/Yachts/YachtPreview";

export default {
	name: "YachtList",
	props: ["yachts"],

	data() {
		return {};
	},
	components: {
		YachtPreview
	}
};
</script>
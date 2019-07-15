<template>
	<section v-if="yachts">
        <h1>OwnerYachtList</h1>
		<owner-yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht">
		</owner-yacht-preview>

	</section>
</template>

<script>
import OwnerYachtPreview from "@/components/Owner/OwnerYachtPreview";

export default {
	name: "OwnerYachtList",
	props: ["yachts"],

	data() {
		return {};
	},
	components: {
		OwnerYachtPreview
	}
};
</script>
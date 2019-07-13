<template>
	<div class="layout">

		<hero />
		<citeis />
		<featureArea />
	</div>

</template>

<script>

import hero from "@/components/Hero";
import citeis from "@/components/Citeis";
import featureArea from "@/components/FeatureArea";

export default {
	name: "home",
	components: {
		citeis,
		featureArea,
		hero
	}
};
</script>

<template>
	<div class="layout">

		<hero />
		<citeis />
		<featureArea />
	</div>

</template>

<script>
// @ is an alias to /src

import hero from "@/components/Hero";
import citeis from "@/components/YachtCiteis";
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

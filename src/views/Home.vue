<template>
	<div class="layout">

		<hero />
		<featureArea />
		<citeis />
	</div>

</template>

<script>
// @ is an alias to /src

import hero from "@/components/Hero";
import featureArea from "@/components/YachtCiteis";
import citeis from "@/components/FeatureArea";

export default {
	name: "home",
	components: {
		citeis,
		featureArea,
		hero
	}
};
</script>

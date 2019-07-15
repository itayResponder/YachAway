<template>
	<div class="content">
		<a target="_blank" href="https://demo07.gethomey.io/listing/large-and-modern-bedroom/">

			<img src="@/assets/img/temp/details-yacht-pics.jpg" />
		</a>
		<img src="@/assets/img/temp/details-top-bnb.jpg" />

		<img @ v-show="toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption-bnb.jpg" />
		<img v-show="!toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption.jpg" />

		<img @ v-show="toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility-bnb.jpg" />
		<img v-show="!toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility.jpg" />

		<img src="@/assets/img/temp/details-calan.jpg" />
		<img src="@/assets/img/temp/details-reviews.jpg" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			toggleDesc: true,
			toggleFacility: true
		};
	}
};
</script>

<style>
</style>

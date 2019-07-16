<template>

	<div class="content">
		<a target="_blank" href="https://demo07.gethomey.io/listing/large-and-modern-bedroom/">

			<img src="@/assets/img/temp/details-yacht-pics.jpg" />
		</a>
		<a target="_blank" href="https://demo03.gethomey.io/listing/large-and-modern-bedroom/">
			<img src="@/assets/img/temp/details-top-bnb.jpg" />
		</a>

		<img v-show="toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption-bnb.jpg" />
		<img v-show="!toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption.jpg" />

		<img v-show="toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility-bnb.jpg" />
		<img v-show="!toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility.jpg" />
		<datePicker />
		<showFreeDates />

		<previewReview />
		<img src="@/assets/img/temp/details-reviews.jpg" />
	</div>

</template>

<script>
import datePicker from "@/components/general/DatePicker";
import showFreeDates from "@/components/general/CalendarShow";
import previewReview from "@/components/yacht/PreviewReview";
export default {
	data() {
		return {
			//FOR DEMONSTARATION PERPUSES
			toggleDesc: true,
			toggleFacility: true
		};
	},
	components: {
		datePicker,
		showFreeDates,
		previewReview
	}
};
</script>

<style>
</style>

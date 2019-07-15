<template>

	<v-range-selector :start-date.sync="range.start" :end-date.sync="range.end" :is-disabled="d => d > '2019-07-27'" enable-single-date />

</template>

<script>
// https://vuejsexamples.com/simple-and-clean-calendar-written-in-vue-js/
import VDaySelector from "vuelendar/components/vl-day-selector";
import VRangeSelector from "vuelendar/components/vl-range-selector";

export default {
	data() {
		return {
			t: { to: "2019-07-21" }
		};
	},
	components: {
		VRangeSelector,
		VDaySelector
	},
	data() {
		return {
			range: {
				start: null,
				end: null
			},
			date: null
		};
	}
	// ...
};
</script>

<style>
/* @import "./vuelendar/scss/vuelendar.scss"; */
</style>

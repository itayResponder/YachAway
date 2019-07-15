<template>

	<v-range-selector :start-date.sync="range.start" :end-date.sync="range.end" :is-disabled="d => d > '2019-07-15'" enable-single-date />

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
.vl-calendar {
	background: #ffffff;
}
.vl-calendar-month__day:hover,
.vl-calendar-month__day > selected--first,
.vl-calendar-month__day > selected--last,
.vl-flex .selected {
	background: #4d9989 !important;
	font-weight: 600 !important;
}
.enable-single-date {
	background: #222b29 !important;
}
</style>

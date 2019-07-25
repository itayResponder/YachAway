<template>

	<v-range-selector :start-date.sync="range.start" :end-date.sync="range.end" :is-disabled="this.getBlockDates " enable-single-date />

</template>

<script>
//this.getBlockDates.forEach(date)
// https://vuejsexamples.com/simple-and-clean-calendar-written-in-vue-js/
// import VDaySelector from "vuelendar/components/vl-day-selector";
import VRangeSelector from "vuelendar/components/vl-range-selector";
export default {
	components: {
		VRangeSelector,
		// VDaySelector
	},
	data() {
		return {
			range: {
				start: null,
				end: null
			},
			blockDates: ['2019-07-21']
			// blockDates: ['2019-07-21', '2019-07-23']
		};
	},
	computed: {
		getBlockDates(){
			return d => 
				d ===  '2019-07-21' || d === '2019-07-23'
				// 	this.blockDates.forEach(blockedDate => {
				// 			return d === blockedDate
				// }); 
		}
	},
	// ...
};
</script>

<style>
.vl-calendar {
	background: #ffffff !important;
}
.vl-calendar-month__week-day {
	color: #4d9989 !important;
}
.vl-calendar-month__title {
	font-size: 1.25rem !important;
	font-weight: 400 !important;
}
.vl-calendar-month__day:hover,
.vl-flex .selected {
	background: #4d9989 !important;
	font-weight: 600 !important;
}
.vl-calendar-month__day.selected--first {
	border-bottom-right-radius: 0 !important;
}
.vl-calendar-month__day.selected--last {
	border-top-left-radius: 0 !important;
}
.enable-single-date {
	background: #222b29 !important;
}
.disabled {
	background: repeating-linear-gradient(
		-45deg,
		rgb(255, 255, 255),
		rgb(255, 255, 255) 3px,
		rgb(235, 235, 235) 3px,
		rgb(235, 235, 235) 4px
	);
	/* color: rgb(0, 0, 0); */
	border: 2px solid rgb(255, 255, 255) !important;
	border-radius: 7px !important;
	padding: 0px !important;
}
</style>

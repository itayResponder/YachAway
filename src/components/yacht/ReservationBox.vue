<template>
	<div>
		<!-- <nav class="navbar is-fixed-top" style="top:4px; right:inherit; left:inherit;"> -->
		<nav class="panel" style="position: sticky;  z-index: 30; top:4px; right:inherit; left:inherit;">
			<p class="panel-heading is-black  has-background-white">
				PRICE PER NIGHT
			</p>
			<div class="panel-block">
				<p class="control has-icons-left">
					<input v-model="startDate" class="input is-small" type="date" placeholder="dates">
					<input v-model="endDate" class="input is-small" type="date" placeholder="dates">

					<!-- <input @click="openCalendar=!openCalendar" v-show="!openCalendar" style="z-index:40;" class="input is-small" />
					<calendarShow @click="openCalendar=!openCalendar" v-show="openCalendar" style="z-index:50;" class="input is-small" /> -->

					<span class="icon is-small is-left">
						<i class="fas fa-search" aria-hidden="true"></i>
					</span>
				</p>
			</div>
			<div class="panel-block">
				<p class="control has-icons-left">
					<input v-model="numOfGuest" min="1" class="input is-small" type="number" placeholder="guests">
					<span class="icon is-small is-left">
						<i class="fas fa-search" aria-hidden="true"></i>
					</span>
				</p>
			</div>
			<div class="panel-block is-active ">
				<span class=" is-medium is-left"> {{yacht.pricePerNight}} $ </span>
			</div>
			<div class="panel-block">
				<button @click="doReservation" class="button is-danger is-link is-outlined is-fullwidth">
					Book it now
				</button>
			</div>
		</nav>

	</div>
</template>

<script>
// import datePicker from "@/components/general/DatePicker";
import calendarShow from "@/components/general/CalendarShow";

export default {
	props: ["yacht"],
	data() {
		return {
			openCalendar: false,
			startDate: "2019-07-19", //null,
			endDate: "2019-07-20", //null,
			numOfGuest: 1
		};
	},
	methods: {
		createUserObj() {
			// create USER object
			const { firstName, _id } = this.$store.getters.userLoggedIn;
			const user = {};
			user.firstName = firstName;
			user._id = _id;
			return user;
		},
		createYachtObj() {
			// create YACHT object
			const yacht = {};
			yacht._id = this.$route.params.id;
			yacht.name = this.yacht.name;
			yacht.pricePerNight = this.yacht.pricePerNight;
			return yacht;
		},
		doReservation() {
			const startDate = this.startDate;
			const endDate = this.endDate;
			const numOfGuest = this.numOfGuest;

			const user = this.createUserObj();
			const yacht = this.createYachtObj();

			// send wantedReservation
			const wantedReservation = { numOfGuest, startDate, endDate, yacht, user };

			if (startDate && endDate && numOfGuest > 0) {
				// CHECK IF IT IS  A REAL DATE :
				// if(!isNaN(Date.parse(startDate))  && !isNaN(Date.parse(endDate)) )
				this.$store.dispatch({ type: "doReservation", wantedReservation });
			} else {
				this.$toast.open({
					duration: 4050,
					message: `Check you have dates and number of guests`,
					position: "is-top-left",
					type: "is-warning"
				});
			}
		}
	},
	components: {
		calendarShow
		// datePicker
	}
};
</script>

<style>
</style>

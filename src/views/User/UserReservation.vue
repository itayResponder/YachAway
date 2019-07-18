<template>
	<div class="b-tabs">
		<nav class="tabs is-medium is-taller has-side-space">
			<ul>
				<li :class="{'is-active' : showUpcoming}">
					<a>
						<!---->
						<span @click="showUpcoming=true">Upcoming</span>
					</a>
				</li>
				<li :class="{'is-active' : !showUpcoming}">
					<a>
						<!---->
						<span @click="showUpcoming=false">History</span>
					</a>
				</li>
			</ul>
		</nav>

		<!---->
		<section class="tab-content">
			<div class="tab-item" style>
				<!---->

				<div v-show="showUpcoming" class="has-space empty-bookings has-text-centered text-lighter t4 text-unresponsive">

					<!-- HAVE RESERVATION -->
					<div v-if="reservations[0]">
						<p class="has-text-weight-semibold">upcoming bookings</p>

						<div v-for="reservation in reservations" :key="reservation._id">
							<p><span>From Date:</span>
								<span>{{reservation.fromDate}}</span></p>
							<p><span>To Date:</span>
								<span>{{reservation.toDate}}</span></p>
							<p><span>yacht:</span>
								<span>{{reservation.yacht.name}}</span></p>
							<p><span>Total Price:$ </span>
								{{reservation.totalPrice}}</p>
							<hr />
						</div>

						<p>Once you make a booking, your upcoming bookings will show up here.</p>
					</div>
					<!-- NO RESERVATION -->
					<div v-if="!reservations[0]">
						<img src="@/assets/img/2b11c87.png" alt="no-upcoming-bookings" />
						<p class="has-text-weight-semibold">No upcoming bookings</p>
						<p>Once you make a booking, your upcoming bookings will show up here.</p>
					</div>
				</div>
				<div class="margin-top-sm"></div>
			</div>

			<div class="tab-item" v-show="!showUpcoming">
				<!---->
				<!---->
				<div class="empty-bookings has-text-centered text-lighter t4 text-unresponsive">
					<img src="@/assets/img/2b11c87.png" alt="no-past-bookings" />
					<p class="has-text-weight-semibold">No past bookings</p>
					<p>All your past bookings will show up here.</p>
				</div>
				<!---->
				<div class="margin-top-sm"></div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showUpcoming: true,
			filterBy: { userId: "" },
			reservations: this.$store.getters.reservationsToShow
		};
	},
	async created() {
		try {
			this.filterBy.userId = this.$store.getters.userLoggedIn._id;
			console.log("user:", this.filterBy);
			const reservations = await this.$store.dispatch({
				type: "loadReservations",
				filterBy: this.filterBy
			});
			console.log("component:", reservations);
		} catch (err) {
			console.log("was error of :", err);
		}
	},
	computed: {
		// getReservations() {
		// 	return this.$store.getters.reservationsToShow;
		// }
	}
};
</script>


<template>
	<main class="bookings">
		<div class="tabs is-nav is-taller scroll-h has-side-space">
			<ul class="width-limit">
				<li class="">
					<router-link to="/travel" class="is-active">Discover</router-link>
				</li>
				<li class="is-active">
					<router-link to="/travel/bookings" class="is-active">My bookings</router-link>
				</li>
				<li class="">
					<router-link to="/travel/bookings/all" class="">All bookings</router-link>
				</li>
			</ul>
		</div>
		<!-- <header class="width-limit has-space-h">
			<div class="is-flex field">
				<div class="is-clipped">
					<p class="field t2 nowrap-ellipsis">My bookings</p>
				</div>
			</div>
		</header> -->
		<section class="width-limit has-space-h is-fullwidth-when-narrow">
			<div class="box all-bookings is-light is-paddingless is-collapsed-when-narrow has-fade">
				<div class="b-tabs">
					<nav class="tabs is-medium is-taller has-side-space">
						<ul>
							<li class="is-active"><a>
									<!----> <span @click="showUpcoming=true">Upcoming</span></a></li>
							<li class=""><a>
									<!---->
									<span @click="showUpcoming=false"> History</span>
								</a></li>
						</ul>
					</nav>
					<section class="tab-content">
						<div class="tab-item" style="">
							<!---->
							<!---->
							<div v-show="showUpcoming" class="has-space empty-bookings has-text-centered text-lighter t4 text-unresponsive">
								<img src="@/assets/img/2b11c87.png" alt="no-upcoming-bookings">
								<p class="has-text-weight-semibold">No upcoming bookings</p>
								<p>Once you make a booking, your upcoming bookings will show up here.</p>
							</div>
							<div class="margin-top-sm"></div>
						</div>
						<div class="tab-item" v-show="!showUpcoming">
							<!---->
							<!---->
							<div class="empty-bookings has-text-centered text-lighter t4 text-unresponsive">
								<img src="@/assets/img/2b11c87.png" alt="no-past-bookings">
								<p class="has-text-weight-semibold">No past bookings</p>
								<p>All your past bookings will show up here.</p>
							</div>
							<div class="margin-top-sm"></div>
						</div>
						<!---->
					</section>
				</div>
			</div>

		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			showUpcoming: true
		};
	}
};
</script>

<style>
</style>

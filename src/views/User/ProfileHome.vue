<template>
	<main class="bookings">
		<div class="tabs is-nav is-taller scroll-h has-side-space">
			<ul class="width-limit">
				<!-- <li class="">
					<router-link to="/travel" class="is-active">Discover</router-link>
				</li> -->
				<li class="">
					<router-link to="reservation" class="">My Trips</router-link>
				</li>
				<li class="">
					<router-link to="my-yachts" class="">My Yachts</router-link>
				</li>
				<li class="">
					<router-link to="messages" class="">Inbox</router-link>
				</li>
				<li class="">
					<router-link to="orders" class="">My Orders</router-link>
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
				<router-view></router-view>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style>
</style>

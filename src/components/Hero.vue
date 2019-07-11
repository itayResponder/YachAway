<template>

	<header class="hero is-fullheight is-large video" style="backgroung-image:url('https://res.cloudinary.com/nivb/image/upload/v1562845570/hero/motor_yachts_lil9cp.jpg')">
		<section class="hero-video">
			<video poster="https://res.cloudinary.com/nivb/image/upload/v1562845570/hero/motor_yachts_lil9cp.jpg" id="bgvid" playsinline autoplay muted loop>
				<source src="https://res.cloudinary.com/nivb/video/upload/v1562858364/hero/under-the-sea-wprentals_dn2vrm.mp4" type="video/mp4">
			</video>

			<div class="hero-head">
				<my-header />

			</div>

			<div class="hero-body">
				<div class="container has-text-centered">
					<p class="title has-text-white">
						Title
					</p>
					<p class="subtitle has-text-white">
						Subtitle
					</p>
				</div>
			</div>
		</section>
	</header>
</template>

<script>
import myHeader from "@/components/MyHeader";

export default {
	components: {
		myHeader
	}
};
</script>

<style>
.hero-video video {
	position: relative;
	left: auto;
	top: auto;
	transform: none;
	object-fit: cover;
}
.hero-head {
	z-index: 5;
}
</style>
<!--   
style="
	position: relative;
	overflow: hidden;
	background-image: url(&quot;/img/green-sea-whiteboat-rent-boat.jpg&quot;) !important;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;"

  -->
<!-- FOR MOBILE
		<section class="hero is-fullheight">
			<div class="hero-head mobile">
	
				<div class="">

				</div>
	
			</div>
			<div class="hero-body mobile is-paddingless-mobile">
	
				<div class=""></div>
				<div class="columns">
					<div class="column is-half">
						<div>

						</div>
					</div>
				</div>
			</div>
		</section>
-->
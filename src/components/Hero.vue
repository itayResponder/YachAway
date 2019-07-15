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

					<div id="custom-search-input">
						<div class="input-group">
							<input ref="autocomplete" onfocus="value = ''" type="text" class=" search-query" placeholder="Your next vacation" @keydown.enter="search">
						</div>
					</div>

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
	mounted() {},
	components: {
		myHeader
	},
	methods: {
		clickMe() {}
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

#custom-search-input .search-query {
	width: 650px;
	padding: 15px 30px;
	border: 0;
	border-radius: 30px;
	box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.75);
	font-weight: 600;
	color: #444;
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
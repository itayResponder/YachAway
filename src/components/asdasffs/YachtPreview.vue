<template>
	<section v-if="yacht">

		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">Side column</p>
				<p class="subtitle">With some content</p>
				<div class="content">
					<figure class="image is-4by3">
						<img src="@/assets/img/singleYacht/3.jpg" />
					</figure>
				</div>
			</article>
		</div>
		<div class="tile is-parent is-8">
			<article class="tile is-child box">
				<p class="title">{{yacht.name}}</p>
				<p class="subtitle">{{yacht.pricePerNight}}</p>
				<div class="content">
					<p>{{yacht.maxPeopleOnBoard}}</p>
				</div>
			</article>
		</div>

		<!--  -->
	</section>
</template>

<script>
import Swal from "sweetalert2";
export default {
	name: "AdminYachtPreview",
	props: ["yacht"],
	data() {
		return {};
	},
	created() {},
	computed: {
		imgUrl() {
			// if (imgs.imgUrl !== imgUrl) return imgs.imgUrl;
			// else return "@/src/assets/img/singleYacht/3.jpg";
		}
	},
	components: {}
};
</script>

<style scoped>
/* CSS OF NIV  ---- FOR DEBUG */
*:not(path):not(g) {
	color: hsla(210, 100%, 100%, 0.9) !important;
	background: hsla(210, 100%, 50%, 0.5) !important;
	outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
	box-shadow: none !important;
}
</style>


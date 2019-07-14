<template>
	<article class="media" v-if="yacht">
		<figure class="media-left image">
			<img :src=yacht.imgs[0] style="max-width:20vw; max-height:160px; object-fit: cover;" />
		</figure>
		<div class="media-content">
			<div class="content">
				<p class="title">{{yacht.name}}</p>
				<p class="subtitle">{{yacht.pricePerNight}}</p>
				<p>{{yacht.maxPeopleOnBoard}}</p>
			</div>
		</div>
	</article>

</template>

<script>
import Swal from "sweetalert2";
export default {
	name: "AdminYachtPreview",
	props: ["yacht"],
	data() {
		return {};
	}
};
</script>

<style scoped>
/* CSS OF NIV  ---- FOR DEBUG */
/* *:not(path):not(g) {
	color: hsla(210, 100%, 100%, 0.9) !important;
	background: hsla(210, 100%, 50%, 0.5) !important;
	outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
	box-shadow: none !important; */
/* } */
</style>
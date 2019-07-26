<template>
	<div class="card is-borderless has-background-white">
		<router-link to="/yachts">
			<div class="card-image " style="object-fit: cover;"><a>
					<figure class="image is-16by9">
						<img :src=yacht.imgs[0]>
						<!---->
					</figure>
				</a>
				<!---->
			</div>
			<div class="card-content is-clickable">
				<div>
					<p class="title is-6 has-text">
						{{yacht.pricePerNight}} $
					</p>
					<p class="subtitle has-text-weight-bold is-6">
						{{yacht.name}}
					</p>
				</div>
				<!---->
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "YachtGridPreview",
	props: ["yacht"]
};
</script>

<style>
</style>

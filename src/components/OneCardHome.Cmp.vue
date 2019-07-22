<template>
	<div class="card is-borderless">
		<router-link to="/yachts">
			<div class="card-image" style="object-fit: cover;"><a>
					<figure class="image">
						<img class="picture" :src="image">
						<!---->
					</figure>
				</a>
				<!---->
			</div>
			<div class="card-content is-clickable">
				<div>
					<p class="title is-7 has-text-grey-light">
						<slot name="subtitle">City subtitle</slot>
					</p>
					<p class="subtitle has-text-weight-bold is-6">
						<slot name="title">City name</slot>
					</p>
				</div>
				<!---->
			</div>
		</router-link>
	</div>

</template>

<script>
export default {
	created() {
		if (!this.image) this.image = "https://res.cloudinary.com/nivb/image/upload/v1562862459/city/city-3227665_640_ulbvzb.jpg"
	},
	props:['image']
};
</script>

<style scoped>
figure:hover {
  opacity: 0.8;
}
picture {
  height: 200px;
  background-size: cover;
  background-position: center;
}
</style>

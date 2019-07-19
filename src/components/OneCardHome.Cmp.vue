<template>
	<div class="card is-borderless">
		<router-link to="/yachts">
			<div class="card-image" style="object-fit: cover;"><a>
					<figure class="image">
						<img class="picture" src="https://res.cloudinary.com/nivb/image/upload/v1562862459/city/city-3227665_640_ulbvzb.jpg">
						<!---->
					</figure>
				</a>
				<!---->
			</div>
			<div class="card-content is-clickable">
				<div>
					<p class="title is-7 has-text-grey-light">
						City subtitle
					</p>
					<p class="subtitle has-text-weight-bold is-6">
						City name
					</p>
				</div>
				<!---->
			</div>
		</router-link>
	</div>

</template>

<script>
export default {};
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

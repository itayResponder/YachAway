<template>
	<div class="card is-borderless">
		<router-link :to="getUrl">
			<div class="card-image" style="object-fit: cover;"><a>
					<figure  class="image image is-4by3">
						<img class="picture" :src="detail.img">
						<!---->
					</figure>
				</a>
				<!---->
			</div>
			<div class="card-content is-clickable">
				<div>
					<!-- <p class="title is-7 has-text-grey-light">
						City subtitle
					</p> -->
					<p class="subtitle has-text-weight-bold is-6">
						{{detail.city}}
					</p>
				</div>
				<!---->
			</div>
		</router-link>
	</div>

</template>

<script>
export default {
	props:["detail"],
	computed: {
		getUrl(){
			return "/yachts/"+this.detail.url
		}
	},
};
</script>

<style scoped>
figure:hover {
  opacity: 0.8
}
picture {
  height: 200px;
  background-size: cover;
  background-position: center;
}
</style>

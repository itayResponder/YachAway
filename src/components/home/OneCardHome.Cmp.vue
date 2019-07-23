<template>
	<div class="card is-shadowless is-relative 	">
		<router-link :to="getUrl">
			<div class="card-image" style="object-fit: cover;"><a>
					<figure  class="image is-4by3 ">
						<img class="picture" :src="detail.img">
						<!---->
					</figure>
				</a>
				<!---->
			</div>
			<div class="card-content is-clickable" style="float:left; ">
				<div>
					<h3 class="title is-4 has-text-white-bis is-capitalized"
              style="top:2.2rem; position:absolute" >
						{{detail.city}}
					</h3>
					<h4 class="is-6 has-text-white-bis is-capitalized "  style="position:absolute;  top:1rem; " >
						{{detail.country}}
					</h4>
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
  border-radius: 4px;
}
</style>

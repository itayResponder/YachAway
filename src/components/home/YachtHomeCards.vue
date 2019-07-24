<template>
	<div class="container is-relative">
		<div class="margin-1rem level-left">
			<p class="title is-capitalized">
				Luxury Yachts
			</p>
		</div>
		<div>
		</div>
		<div style="overflow: hidden;">
			<div class="columns transition is-multiline">
				<div v-for="(detail,idx) in locationDetails " :key="idx"
				 class="column 
				is-one-fifth-desktop is-half-tablet is-one-mobile">
					<OneCardItem :detail="detail" >
                       <figure  class="image is-2by3">
					     	<img class="is-cover" :src="detail.img">
					   </figure>

					</OneCardItem >
				</div>
			</div>
		</div>
		<div class="margin-1rem level-left">
			<p class="title is-capitalized">
				 top rated yachts
			</p>
		</div>
		<div>
		</div>
		<div style="overflow: hidden;">
			<div class="columns transition is-multiline">
				<div v-for="(detail,idx) in locationDetails " :key="idx"
				 class="column 
				is-one-fifth-desktop is-half-tablet is-one-mobile">
					<OneCardItem :detail="detail" >
                       <figure  class="image is-3by5">
					     	<img class="is-cover" :src="detail.img">
					   </figure>

					</OneCardItem >
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import OneCardItem from "@/components/home/OneCardHome.Cmp";
export default {
	components: {
		OneCardItem
	},
	data() {
		return {
			locationDetails:[
            {img:'https://res.cloudinary.com/ocean-yachts/image/upload/v1563777458/Yacths/locations/4_tmjzp0.jpg',city:'Sydney',country: 'Australia', url:'australia'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/v1563777463/Yacths/locations/5_b8dsvh.jpg',city:'San marino',country: 'italy', url:'italy'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/v1563777457/Yacths/locations/7_qn4kau.jpg',city:'Bilbao',country: 'Spain', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/v1563777456/Yacths/locations/1_myixgj.jpg',city:'Naples',country: 'Spain', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/v1563777453/Yacths/locations/3_tnr0rn.jpg',city:'Nice',country: 'France', url:'france'},
            ],
		};
	}
};
</script>

<style>

</style>

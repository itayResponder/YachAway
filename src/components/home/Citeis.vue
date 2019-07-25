<template>
	<div class="container is-relative" index="13" >
		<div class="margin-3rem">
			<h2 class="title is-capitalized">
				<slot> Sail Your Way</slot>
			</h2>
		</div>
		<div>
		</div>
		<div style="overflow: hidden;">
			<div class="columns transition is-multiline">
				<div v-for="(detail,idx) in locationDetails " :key="idx"
				 class="column 
				is-one-third-desktop is-half-tablet is-one-mobile">
					<OneCardItem :detail="detail" >
                       <figure  class="image is-4by3 ">
					     	<img class="picture is-cover" :src="detail.img">
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
			locationDetails:[{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/4_tmjzp0.jpg',city:'Sydney',country: 'Australia', url:'australia'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/5_b8dsvh.jpg',city:'San marino',country: 'italy', url:'italy'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/7_qn4kau.jpg',city:'Bilbao',country: 'Spain', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/1_myixgj.jpg',city:'Naples',country: 'Spain', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/3_tnr0rn.jpg',city:'Nice',country: 'France', url:'france'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_1050/Yacths/locations/6_bq7tvi.jpg',city:'Crete',country: 'Greece', url:'greece'}],
			// cities:['Sydney,Australia','San marino,italy','Barcelona,Spain','Nice,France','Crete,Greece','Bilbao,Spain']
			// cities: "@/assets/img/loc/"
		};
	}
};
</script>

<style>

</style>

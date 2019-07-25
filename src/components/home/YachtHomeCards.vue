<template>
	<div class="container is-relative">
		<div class="margin-1rem level-left">
			<p class="title is-capitalized">
				 top rated yachts
			</p>
		</div>
		<div>
		</div>
		<div style="overflow: hidden;">
			<div class="columns transition is-multiline">
				<div v-for="(detail,idx) in yachtDetails " :key="idx"
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
				is-one-third-desktop is-half-tablet is-one-mobile">
					<OneCardItem :detail="detail" >
                       <figure  class="image is-3by2">
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
            {img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/Sky/1_ubucz9.jpg',city:'Sky',country: ' ', url:'australia'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/Claudia/8_bck62m.jpg',city:'Claudia',country: ' ', url:'italy'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/w_850,c_crop/Yacths/Elizabeth/2_ltsusu.jpg',city:'Bilbao',country: ' ', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850,c_crop/Yacths/The%20Pacific/3_vguany.jpg',city:'The Blue',country: ' ', url:'spain'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/The%20Pacific/2_tqd8j4.jpg',city:'The Pacific',country: ' ', url:'france'},
			{img:'https://res.cloudinary.com/dopdel26f/image/upload/h_850/Yachts/The%20Pam/luxury-yacht-deck-wallpaper_qo22ta.jpg',city:'Pam',country: ' ', url:'france'},
            ],
			yachtDetails:[
            {img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850,c_crop/Yacths/The%20Blue%20Wave/9_lyweuy.jpg',city:'+Blue Wave',country: ' ', url:'australia'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/The%20Blue%20Wave/2_cehtqd.jpg',city:'Claudia',country: ' ', url:'italy'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/Oceanda/2_tmtfgu.jpg',city:'Oceanda',country: '', url:'spain'},
			{img:'https://1.bp.blogspot.com/-fIz4kQtHu6g/T3qEcaBV1pI/AAAAAAAACPw/6CyorTKGqr0/s1600/boat.jpg',city:'The King',country: ' ', url:'france'},
			{img:'https://res.cloudinary.com/ocean-yachts/image/upload/h_850/Yacths/The%20Blue%20Wave/6_oxmsnm.jpg',city:'Naples',country: ' ', url:'spain'},
            ],
		};
	}
};
</script>

<style>

</style>

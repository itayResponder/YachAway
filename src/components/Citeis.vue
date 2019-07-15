<template>
	<div class="container" index="13" style="position: relative !important;">
		<div class="margin-6rem">
			<p class="title">
				Sail Your Way
			</p>
		</div>
		<div>
		</div>
		<div style="overflow: hidden;">
			<div class="columns transition is-multiline">
				<div v-for="index in 6" :key="index" class="column 
				is-one-third-desktop is-one-third-tablet  ">
					<OneCardItem />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import OneCardItem from "@/components/OneCardHome.Cmp";
export default {
	components: {
		OneCardItem
	},
	data() {
		return {
			// cities: "@/assets/img/loc/"
		};
	}
};
</script>

<style>
.margin-6rem {
	margin: 6rem;
}
.margin-7rem {
	margin: 7rem;
}
</style>

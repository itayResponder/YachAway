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
			<div class="columns transition is-mobile prevent-multiline-mobile">

				<div v-for="index in 4" :key="index" class="column is-two-sevenths-mobile is-one-third-tablet is-one-quarter-desktop">

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
			cities: []
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

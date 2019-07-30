<template>
	<article class="media">
		<figure class="media-left">
			<p class="image  is-48x48">
					<!-- slot img url -->
				<img class="is-rounded" src="@/assets/img/jonathan.jpg">
			</p>
		</figure>
		<div class="media-content">
			<div class="content">
				<p>
					<!-- slot name -->
					<strong>{{review.name}}</strong> <br />
					<!-- slot date -->
					<!-- <small>{{review.createdAt | moment("dddd ,MMMM Do YYYY ") }}</small> -->
					<small>{{+review.date | moment("from","now") }}</small>
					<br>
					<!-- slot review -->
					{{review.description || defualtReview	}}
				</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	name:"review-list",
	props:["review"],
	data() {
		return {
			defualtReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.'
		}
	},

};
</script>

<style>
</style>

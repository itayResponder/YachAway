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
					<strong>John Smith</strong> <br />
					<!-- slot date -->
					<small>July 2019</small>
					<br>
					<!-- slot review -->
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
				</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {};
</script>

<style>
</style>

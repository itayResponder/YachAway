<template>

	<nav style="position: absolute; z-index: 5; overflow: hidden; " class="level is-padded">
		<div class="level-left">
			<div class="level-item">

				<div>
					<router-link class="button has-text-black is-medium is-transparent" exact to="/">Home</router-link>
				</div>

				<div>
					<router-link class="button has-text-black is-medium is-transparent" to="/yachtApp">Yacht App
					</router-link>
				</div>
				<div>
					<router-link class="button has-text-black is-medium is-transparent" to="/about">About
					</router-link>
				</div>
				<div>
					<router-link class="button has-text-black is-medium is-transparent" to="/admin">Admin
					</router-link>
				</div>

			</div>
		</div>

		<div class="level-left">
			<div class="level-item">
			</div>
		</div>
		<div class="level-right">
			<div class="level-item">
				<div>
					<a class="button has-text-black is-small is-transparent">
						<span>Log in</span> </a>
				</div>

				<div>
					<a class="button has-text-black is-small is-transparent">
						<span> Sign up </span> </a>
				</div>
			</div>
		</div>

	</nav>
</template>

<script>
export default {
	name: "MyHeader"
};
</script>
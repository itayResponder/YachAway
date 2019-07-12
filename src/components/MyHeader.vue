<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
				</a>

				<span class="navbar-burger burger" data-target="navbarMenuHeroB">
					<span></span>
					<span></span>
					<span></span>

				</span>
			</div>
			<div id="navbarMenuHeroB" class="navbar-menu ">
				<div class="navbar-end ">
					<router-link class="navbar-item  has-text-white" active-class="is-active" to="/">
						Home
					</router-link>
					<router-link class="navbar-item  has-text-white" to="/yachts">
						Yachts
					</router-link>
					<router-link class="navbar-item has-text-white" to="/About">
						About / Help
					</router-link>
					<router-link class="navbar-item  has-text-black is-medium" to="/admin">Admin
					</router-link>

					<router-link class="navbar-item has-text-white" to="/About">
						<span class="icon"> </span>
						Login / SignUp
					</router-link>
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
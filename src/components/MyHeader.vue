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
					<router-link class="navbar-item  has-text-white" active-class="is-active" to="/home">
						Home
					</router-link>
					<router-link class="navbar-item  has-text-white" to="/yachts">
						Yachts
					</router-link>
					<router-link class="navbar-item has-text-white" to="/About">
						About / Help
					</router-link>
				</div>
				<div>
					<router-link class="button has-text-black is-medium is-transparent" to="/admin">Admin
					</router-link>
				</div>

					<span class="navbar-item">
						<router-link class="navbar-item" to="/About">

							<span class="icon">
							</span>
							<span class="has-text-white">Login / SignUp</span>

						</router-link>
					</span>
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
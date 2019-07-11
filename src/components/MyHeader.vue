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
			<div id="navbarMenuHeroB" class="navbar-menu">
				<div class="navbar-end">
					<a class="navbar-item is-active is-inverted">
						Home
					</a>
					<router-link class="navbar-item" to="/yachts">
						Yachts
					</router-link>
					<router-link class="navbar-item" to="/About">
						About / Help
					</router-link>

					<span class="navbar-item">
						<router-link class="navbar-item" to="/About">

							<span class="icon">
							</span>
							<span>Login / SignUp</span>

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
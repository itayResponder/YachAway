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
					<router-link :class="[menuClass]" active-class="is-active" to="/">
						Home
					</router-link>
					<router-link :class="[menuClass]" to="/yachts">
						Yachts
					</router-link>
					<router-link :class="[menuClass]" to="/About">
						About / Help
					</router-link>
					<router-link v-if="loggedUser" :class="[menuClass]" to="/admin">Admin
					</router-link>

					<router-link v-if="!loggedUser" :class="[menuClass]" to="/login">
						<span class="icon"> </span>
						Login / SignUp
					</router-link>
					<!-- <router-link v-else :class="[menuClass]" to="/"> -->
					<!-- <button @click="logout" class="is-light">Log-Out</button> -->
					<!-- </router-link> -->
					<b-button v-if="loggedUser" @click="logout" type="is-danger">Log-Out</b-button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	props: ["loggedUser"],
	name: "MyHeader",
	computed: {
		menuClass() {
			if (this.$route.name === "Home") return "navbar-item  has-text-white";
			else return "navbar-item  has-text-black";
		}
	},
	methods: {
		async logout() {
			try {
				this.$store.dispatch({type: "logout", loggedUser: this.loggedUser })
				this.$router.push('/');
			} catch {
				console.log('Could not log out')
			}
		}
	}
};
</script>
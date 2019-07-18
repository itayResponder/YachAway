<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<span class="navbar-burger burger" data-target="navbarMenuHeroB">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>
			<div id="navbarMenuHeroB" class="navbar-menu">
				<div class="navbar-end">
					<router-link :class="[menuClass]" exact to="/">Home</router-link>
					<router-link :class="[menuClass]" to="/yachts">Yachts</router-link>
					<router-link :class="[menuClass]" to="/About">About / Help</router-link>
					<!-- <router-link v-if="loggedInUser" :class="[menuClass]" to="/admin">Admin</router-link> -->
					<router-link :class="[menuClass]" to="/edit">List Your Yacht</router-link>
					<router-link v-if="loggedInUser" :class="[menuClass]" :to=getUrlId>Profile</router-link>
					<router-link v-if="!loggedInUser" :class="[menuClass]" to="/login">Login / SignUp</router-link>
					<b-button v-else @click="logout" class="is-link is-outlined" type="is-danger">Log-Out</b-button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "MyHeader",
	props: ["loggedInUser"],
	data() {
		return {};
	},
	computed: {
		menuClass() {
			if (this.$route.name === "Home") return "navbar-item  has-text-black";
			else return "navbar-item  has-text-black";
		},
		getUrlId(){
			return '/profile/reservation'//+this.loggedInUser._id
		}
	},
	methods: {
		async logout() {
			try {
				this.$store.dispatch({ type: "logout", loggedUser: this.userLoggedIn });
				this.$router.push("/");
			} catch (err) {
				console.log("Could not log out err:", err);
			}
		}
	}
};
</script>

<style scoped>
.navbar {
	margin-bottom: 50px; 
}

b-button {
	padding: 0.5rem 0.75rem 0 0.75rem;
}
</style>

<template>
	<div id="app">
		<my-header :loggedInUser="getLoggedInUser" v-if="!headerType"></my-header>
		<router-view></router-view>
	</div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
export default {
	name: "App",
	data() {
		return {
		};
	},
	components: {
		MyHeader
	},

	computed: {
		headerType() {
			return this.$route.name === "Home";
		},
		getLoggedInUser() {
			return this.$store.getters.userLoggedIn;
		}
	}
};
</script>

<style lang="scss">
// Import Bulma's core
/* Import Bulma and Buefy styles */
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";

// @import url("https://fonts.googleapis.com/css?family=EB+Garamond&display=swap");
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

@import "assets/css/main.css";

// Set your colors
$primary: #b9ced1;
// $primary-invert: findColorInvert($primary);


#app {
	// font-family: "Avenir", Helvetica, Arial, sans-serif;
	h1,
	h2,
	h3,
	// h4,
	// h5,
	// h6,
	.is-1,
	.is-2 {
		font-family: "Dosis", serif;
	}

	body {
		font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
	}

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
				border-bottom: 2px solid $primary !important;

		}
	}
}
</style>


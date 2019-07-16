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
		return {};
	},
	created() {
		this.$store.dispatch("loadYachts");
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
@import "~bulma/sass/utilities/_all";
@import url("https://fonts.googleapis.com/css?family=EB+Garamond&display=swap");
// @import "assets/css/helpers.css";
@import "assets/css/main.css";

// Set your colors
$primary: #8c67ef;

#app {
	// font-family: "Avenir", Helvetica, Arial, sans-serif;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	.is-1,
	.is-2 {
		font-family: "EB Garamond", serif;
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
		}
	}
}
</style>

<template>
	<div id="app">
		<my-header></my-header>
		<router-view></router-view>
	</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
export default {
	name: "App",
	data() {
		return {};
	},
	components: {
		MyHeader
	},
	created() {
		console.log("App.vue created!");
		this.$store.dispatch('loadYachts');
	}
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
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

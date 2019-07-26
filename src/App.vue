<template>
  <div id="app">
    <my-header :loggedInUser="getLoggedInUser" v-show="!homePage"></my-header>
    <router-view></router-view>
    <Myfooter />
  </div>
</template>

<script>
import MyHeader from "@/components/sitecross/MyHeader.vue";
import Myfooter from "@/components/sitecross/Footer.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  // async created() {
  //   console.log('app created loggedInUser:',this.loggedInUser)
  //   await this.$store.dispatch({
  //     type: "loadUserMsgs",
  //     userLoggedInId: this.$store.getters.userLoggedIn._id
  //   });
  // },
  components: {
    MyHeader,
    Myfooter
  },
  watch: {
	"$route.name"  : function() {
		if (this.$route.name === "Home") {
			return document.body.classList.remove("has-navbar-fixed-top");
      } else return document.body.classList.add("has-navbar-fixed-top");  
	}
  },

  computed: {
    homePage() {
      return this.$route.name === "Home" || this.$route.param === "/";
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

@import "assets/css/main.css";

// Set your colors
// $primary: #b9ced1;
$primary: #4d9989;
// $primary: #3276e2 !important;
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
    font-family: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI",
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
    // color: #42b983 !important;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #2c3e50;
      border-bottom: 2px solid $primary !important;
    }
  }
}
</style>


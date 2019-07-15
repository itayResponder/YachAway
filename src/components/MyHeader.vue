<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
        </a>

        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" class="navbar-menu">
        <div class="navbar-end">
          <router-link :class="[menuClass]" active-class="is-active" to="/">Home</router-link>
          <router-link :class="[menuClass]" to="/yachts">Yachts</router-link>
          <router-link :class="[menuClass]" to="/About">About / Help</router-link>
          <router-link v-if="loggedInUser" :class="[menuClass]" to="/admin">Admin</router-link>
          <router-link :class="[menuClass]" to="/edit">List Your Yacht</router-link>
          <router-link v-if="!loggedInUser" :class="[menuClass]" to="/login">Login / SignUp</router-link>
          <b-button v-else @click="logout" type="is-danger">Log-Out</b-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["loggedInUser"],
  name: "MyHeader",
  created() {
	  console.log('MyHeader created! loggedInUser:', this.loggedInUser)
  },
  computed: {
    menuClass() {
      if (this.$route.name === "Home") return "navbar-item  has-text-white";
      else return "navbar-item  has-text-black";
    }
  },
  methods: {
    async logout() {
      try {
        this.$store.dispatch({ type: "logout", loggedUser: this.loggedUser });
        this.$router.push("/");
      } catch (err) {
        console.log("Could not log out err:", err);
      }
    }
  }
};
</script>
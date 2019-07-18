<template>
  <nav class="navbar is-transparent  is-fixed-top is-fullheight-with-navbar">
    <div class="container">
      <div class="navbar-brand">
        <span
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenuHeroB"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" class="navbar-menu">
        <div class="navbar-start">
          <router-link :class="[menuClass]" exact to="/">Home</router-link>
          <router-link :class="[menuClass]" to="/yachts">Yachts</router-link>
          <router-link :class="[menuClass]" to="/About">About / Help</router-link>
          <!-- <router-link v-if="loggedInUser" :class="[menuClass]" to="/admin">Admin</router-link> -->
        </div>
        <div class="navbar-end">
          <router-link :class="[menuClass]" to="/edit">List Your Yacht</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link
              v-show="loggedInUser"
              :class="[menuClass, 'navbar-link']"
              :to="getUrlId"
            >Profile</router-link>
            <div class="navbar-dropdown is-boxed">
              <router-link
                v-show="loggedInUser"
                :class="[menuClass,'is-subtitle']"
                to="/profile/my-yachts"
              >My Yachts</router-link>
              <router-link
                v-show="loggedInUser"
                :class="[menuClass,'is-subtitle']"
                to="/profile/reservation"
              >My Reservation</router-link>

              <hr class="navbar-divider" />
              <span v-show="loggedInUser" @click="logout" class="navbar-item">
                <b-button class="is-link" type="is-primary">Logout</b-button>
              </span>

              <!-- end nav bar drop down -->
            </div>
          </div>

          <!-- need to login or signup -->
          <div v-show="!loggedInUser" class="navbar-item">
            <span class="button is-primary navbar-content is-outlined">
              <router-link  :class="[menuClass]" to="/login">Login</router-link>
            </span>
          </div>
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
    getUrlId() {
      return "/profile/reservation"; //+this.loggedInUser._id
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
// TODO
// MOVE IT TO VUE LATER
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>

<style scoped>
.navbar {
  margin-bottom: 50px;
}

b-button {
  padding: 0.5rem 0.75rem 0 0.75rem;
}
</style>

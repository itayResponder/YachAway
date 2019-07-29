<template>
  <nav class="navbar is-transparent is-fixed-top is-fullheight-with-navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" exact to="/">
          <img src="@/assets/img/logo/yacht.png" width="30" />
        </router-link>

        <span
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenuHeroB"
          @click="isBurgerMenuOpen = !isBurgerMenuOpen"
          v-bind:class="{'is-active': isBurgerMenuOpen}"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" :class="[{'is-active': isBurgerMenuOpen}, 'navbar-menu']">
        <div class="navbar-start">
          <router-link :class="[menuClass, {'has-text-black' : isBurgerMenuOpen}]" exact to="/">Home</router-link>
          <router-link
            :class="[menuClass,{'has-text-black' : isBurgerMenuOpen}]"
            to="/yachts"
          >Yachts</router-link>
          <router-link
            :class="[menuClass,{'has-text-black' : isBurgerMenuOpen}]"
            to="/About"
          >About</router-link>
          <!-- <router-link v-if="loggedInUser" :class="[menuClass]" to="/admin">Admin</router-link> -->
        </div>
        <div class="navbar-end">
          <router-link
            :class="[menuClass, {'has-text-black' : isBurgerMenuOpen}]"
            to="/edit"
          >List Your Yacht</router-link>
          <div class="navbar-item has-dropdown is-centered is-hoverable">
            <router-link
              v-if="loggedInUser"
              :class="[menuClass, 'navbar-link', {'has-text-black' : isBurgerMenuOpen}]"
              :to="getUrlId"
            >{{loggedInUser.firstName}}</router-link>
            <div class="navbar-dropdown is-boxed">
              
              <router-link
                v-show="loggedInUser"
                :class="['navbar-item has-text-black is-subtitle']"
                to="/profile/messages"
              >Inbox : {{this.userMsgsCount}}</router-link>

              
              <router-link
                v-show="loggedInUser"
                :class="['navbar-item has-text-black is-subtitle']"
                to="/profile/reservation"
              >My Trips</router-link>

              <router-link
                v-show="loggedInUser"
                :class="['navbar-item has-text-black is-subtitle']"
                to="/profile/my-yachts/manage"
              >My Yachts</router-link>
              
              <router-link
                v-show="loggedInUser"
                :class="['navbar-item has-text-black is-subtitle']"
                to="/profile/settings"
              >Settings</router-link>
              
              <hr class="navbar-divider" />
              <span v-show="loggedInUser" @click="logout" class="navbar-item">
                <b-button class="is-primary">Logout</b-button>
              </span>

              <!-- end nav bar drop down -->
            </div>
          </div>

          <!-- need to login or signup -->
          <div v-show="!loggedInUser" class="navbar-item">
            <span class="button is-primary navbar-content is-outlined">
              <router-link
                :class="[menuClass,{'has-text-black' : isBurgerMenuOpen}]"
                to="/login"
              >Login</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import utillService from "@/services/utill.service";

export default {
  name: "MyHeader",
  props: ["loggedInUser"],
  data() {
    return {
      isBurgerMenuOpen: false
    };
  },
  computed: {
    userMsgsCount() {
      return this.$store.getters.userMsgsCount;
    },
    menuClass() {
      if (this.$route.name === "Home")
        return "navbar-item has-text-white hamburger-text-color-fixer";
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
  },
  created() {
    if (this.$route.name === "Home") {
      return document.body.classList.remove("has-navbar-fixed-top");
    } else return document.body.classList.add("has-navbar-fixed-top");
  },
  mounted() {}
};
</script>

<style scoped>
.navbar {
  margin-bottom: 50px;
}

b-button {
  padding: 0.5rem 0.75rem 0 0.75rem;
}

.navbar-burger {
  color: #0a0a0a !important;
}

@media (max-width: 960px) {
  .hamburger-text-color-fixer {
    color: black !important;
  }
}
</style>

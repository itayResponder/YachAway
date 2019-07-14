<template>
  <section>
    <form @submit.prevent>
      <b-field>
        <b-input placeholder="Enter User Name" v-model="user.userName"></b-input>
      </b-field>
      <b-field>
        <b-input
          v-model="user.password"
          type="password"
          placeholder="Enter Your Password"
          password-reveal
        ></b-input>
      </b-field>
      <b-button @click="login" type="is-info">Login</b-button>
      <b-button @click="signup" type="is-info">Sign-Up</b-button>
    </form>
  </section>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
        let cpyUser = JSON.parse(JSON.stringify(this.user));
        try {
          let validUser = await this.$store.dispatch({ type: "checkValidUser", user: cpyUser })
          this.$router.push("/yachts");
        } catch {
          console.log("not valid user");
          Swal.fire({ type: "error", text: "Wrong User Name or password!" });
          this.user.userName = "";
          this.user.password = "";
        }
    },
    signup() {
      console.log("signup clicked!");
    }
  }
};
</script>


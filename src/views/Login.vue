<template>
  <section>
    <form class="login-form" @submit.prevent>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input v-model="user.email" class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <img src="@/assets/icons/email.svg" alt="email" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="user.password" class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <img src="@/assets/icons/lock.svg" alt="lock" />
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control"></p>
      </div>
      <div class="login-buttons">
      <b-button @click="login" type="is-primary">Login</b-button>
      <b-button @click="signUp" type="is-primary">Sign-Up</b-button>
      </div>
    </form>
  </section>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      user: {
        email: "itay.responder@gmail.com",
        password: "1234"
      }
    };
  },
  methods: {
    async login() {
      let cpyUser = JSON.parse(JSON.stringify(this.user));
      try {
        let validUser = await this.$store.dispatch({
          type: "login",
          user: cpyUser
        });
        
        this.$router.push("/yachts");
      } catch (err){
        console.log("not valid user error:", err);
        Swal.fire({ type: "error", text: "Wrong User Name or password!" });
        this.user.email = "";
        this.user.password = "";
      }
    },
    async signUp() {
      let cpyUser = {...this.user}
      try {
        await this.$store.dispatch({type: "signUp", user: cpyUser})
      } catch (err) {
        console.log("user allready exist! error:", err)
        Swal.fire({ type: "error", text: "Email is allready exist!" });
        this.user.email = "";
        this.user.password = "";
      }
      this.$router.push("/yachts");
    }
  }
};
</script>
<style>
.login-form {
  width: 20rem;
  margin: auto;
  margin-top: 100px;
}

.login-buttons button {
  margin-right: 20px;
}
</style>

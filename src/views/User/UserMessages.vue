<template>
  <section>
    <h1 v-if="!this.userLoggedInReservations[0]">
      <b>You dont have any messages</b>
    </h1>
    <nav v-else>
      <b>You have got new messages</b>
      <br />
      <!-- {{this.userLoggedInReservations}} -->
      <user-messages-list
        v-if="this.loggedInUser.isOwner"
        :reservations="reservations"
        @replyUser="replyUser"
      ></user-messages-list>
      <div v-else>{{this.userLoggedInReservations}}</div>
    </nav>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import UserMessagesList from "@/components/user/UserMessagesList";
export default {
  data() {
    return {
      loggedInUser: null,
      userLoggedInReservations: []
    };
  },
  async created() {
    this.loggedInUser = this.$store.getters.userLoggedIn;
    try {
        this.userLoggedInReservations = await this.$store.dispatch({type: "loadUserReservations", userId: this.loggedInUser._id})
    } catch (err) {
        console.log("Could not load user reservations error:", err)
    }
  },
  computed: {
    reservations() {
      return this.$store.getters.userReservations;
    }
  },
  methods: {
    async replyUser(replyUser) {
      try {
        const answer = await this.$store.dispatch({
          type: "replyUser",
          replyUser
        });
        await Swal.fire(
          "Allright",
          `Message has been sent to the user`,
          "success"
        );
      } catch (err) {
        console.log("UserMesseges eror", err);
      }
    }
  },
  components: {
    UserMessagesList
  }
};
</script>

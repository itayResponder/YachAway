<template>
  <section>
    <h1 v-if="!this.userMsgs[0]">
      <b>You dont have any messages</b>
    </h1>
    <nav v-else>
      <b>You have got messages</b>
      {{userMsgs}} test
      <br />
      <!-- {{this.userLoggedInReservations}} -->
    </nav>
    <section v-if="this.loggedInUser.isOwner">
      <user-messages-list
        v-if="this.loggedInUser.isOwner"
        :reservations="reservations"
        @replyToUserFromOwner="replyToUserFromOwner"
      ></user-messages-list>
      <!-- <div v-else>{{userMsgs}} test</div> -->
    </section>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import UserMessagesList from "@/components/user/UserMessagesList";
export default {
  data() {
    return {
      loggedInUser: null,
      userLoggedInReservations: [],
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
    userMsgs() {
      console.log('userMsgs:',this.$store.getters.userMsgs)
      return this.$store.getters.userMsgs;
    },
    reservations() {
      return this.$store.getters.userReservations;
    }
  },
  methods: {
    async replyToUserFromOwner(replyToUserFromOwner) {
      try {
        const answer = await this.$store.dispatch({
          type: "replyToUserFromOwner",
          replyToUserFromOwner
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

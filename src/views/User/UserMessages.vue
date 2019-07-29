<template>
  <section>
    <!-- ##ITAY CHECK IF IT IS OKAY - I ADDED " [0]" IN THE IF -->
    <div v-if="!this.userMsgs[0]">
      <empty-data-case :info="noMessages"></empty-data-case>
    </div>

    <nav v-else>
      <b>You have got messages</b>
      {{userMsgs}}
      <br />
      <!-- {{this.userLoggedInReservations}} -->
    </nav>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import UserMessagesList from "@/components/user/UserMessagesList";
import emptyDataCase from "@/components/general/EmptyDataCase";

export default {
  data() {
    return {
      loggedInUser: null,
      userLoggedInReservations: [],
      noMessages: {
        title: "No messages",
        info: "Start send messages ,And get more deals for your trip",
        imageType: "emptyInbox"
      }
    };
  },
  async created() {
    this.loggedInUser = this.$store.getters.userLoggedIn;
    try {
      await this.$store.dispatch({
        type: "loadUserMsgs",
        userLoggedInId: this.loggedInUser._id
      });
      this.userLoggedInReservations = await this.$store.dispatch({
        type: "loadUserReservations",
        userId: this.loggedInUser._id
      });
    } catch (err) {
      this.noMessages.title = "We couldn't retrive your messages"
      this.noMessages.info = "Get a better connection or try again in few minutes"
      this.noMessages.imageType = "noConnectionPhone"
      console.log("Could not load user reservations error:", err);
    }
  },
  computed: {
    userMsgs() {
      return this.$store.getters.userMsgs;
    }
    // reservations() {
    //   return this.$store.getters.userReservations;
    // }
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
    UserMessagesList,
    emptyDataCase
  }
};
</script>

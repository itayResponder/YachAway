<template>
  <section>
    <user-messages-list
      v-if="this.loggedInUser.isOwner && userLoggedInReservations[0]"
      :reservations="reservations"
      @replyToUserFromOwner="replyToUserFromOwner"
    ></user-messages-list>

    <div v-else>
      <empty-data-case  :info="noMessages"></empty-data-case>
    </div>
    <!-- <div v-else>{{userMsgs}} test</div> -->
  </section>
</template>

<script>
import UserMessagesList from "@/components/user/UserMessagesList";
import emptyDataCase from "@/components/general/EmptyDataCase";

export default {
  // props: ["loggedInUser","userLoggedInReservations"],
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
      // this.noMessages.imageType = "noConnectionCrab"
      
      console.log("Could not load user reservations error:", err);
    }
  },
  computed: {
    //  userMsgs() {
    //     return this.$store.getters.userMsgs;
    // },
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
    },
    emitUserType() {
      var filter = { ...this.filterBy };
      this.$emit("set-filter", filter);
    }
  },
  components: {
    UserMessagesList,
    emptyDataCase
  }
};
</script>

<style>
</style>

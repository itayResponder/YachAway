<template>
  <section>
      <h1>UserMessages</h1>
    <h1 v-if="!this.userLoggedInReservations">You dont have any messages</h1>
    <nav v-else>
      <b>You have got new messages</b>
      <br />
      <!-- {{this.userLoggedInReservations}} -->
    <user-messages-list v-if="this.userLoggedInReservations[0].yacht" :reservations="reservations" @replyUser="replyUser"></user-messages-list>
    <div v-else>
        {{this.userLoggedInReservations}}
    </div>
    </nav>
    <h2>Messages</h2>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import UserMessagesList from "@/components/user/UserMessagesList";
export default {
  data() {
    return {
      userLoggedInReservations: []
    };
  },
  created() {
    this.userLoggedInReservations = this.$store.getters.userLoggedIn.reservations;
  },
  computed: {
      reservations() {
          return this.$store.getters.userLoggedIn.reservations;
      }
  },
  methods: {
      async replyUser(replyUser) {
          try {
              const answer = await this.$store.dispatch({type: "replyUser", replyUser})
              await Swal.fire("Allright",
            `Message has been sent to the user`,
            "success"
          );
          } catch (err) {
              console.log('UserMesseges eror', err)
          }
      }
  },
  components: {
      UserMessagesList
  }
};
</script>

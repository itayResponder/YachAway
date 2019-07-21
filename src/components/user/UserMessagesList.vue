<template>
  <section class="my-cards" v-if="reservations">
    <h1>USERLIST</h1>
    <user-messages-preview
      v-for="reservation in reservations"
      :key="reservation._id"
      :reservation="reservation"
      @replyUser="replyUser"
    ></user-messages-preview>
  </section>
</template>

<script>
import UserMessagesPreview from "@/components/user/UserMessagesPreview";

export default {
  name: "UserMessagesList",
  props: ["reservations"],

  data() {
    return {};
  },
  methods: {
    replyUser(replyUser) {
		this.$emit("replyUser", replyUser);
	}
  },
  components: {
    UserMessagesPreview
  }
};
</script>

<style scoped>
.my-cards {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  flex-wrap: wrap;
}
</style>

<template>
  <section class="my-cards" v-if="reservations">
    <user-messages-preview
      v-for="reservation in reservations"
      :key="reservation._id"
      :reservation="reservation"
      @replyToUserFromOwner="replyToUserFromOwner"
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
  created() {
    console.log('UserMessagesList reservations:', this.reservations)
  },
  methods: {
    replyToUserFromOwner(replyToUserFromOwner) {
		this.$emit("replyToUserFromOwner", replyToUserFromOwner);
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

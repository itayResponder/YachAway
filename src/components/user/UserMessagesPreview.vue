<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<img v-if="reservation" :src="reservation.yacht.img" alt="Placeholder image" />
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">reservation by: {{reservation.user.name}}</p>
					<p class="subtitle is-6">reservation yacht: {{reservation.yacht.img}}</p>
				</div>
			</div>

			<div class="content">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus nec iaculis mauris.
				<a>@bulmaio</a>.
				<a href="#">#css</a>
				<a href="#">#responsive</a>
				<br />
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
			</div>
			<div class=" is-bottom ">
				<b-button @click="approveUser" type="button field is-primary">
					Approve User Request
				</b-button>
				<b-button type="button field is-primary" @click="declineUser">
					Decline User Request
				</b-button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["reservation"],
	data() {
		return {
            replyToUserFromOwner: null
        };
    },
	mounted() {
		this.replyToUserFromOwner = this.reservation.user
        this.replyToUserFromOwner.reservationId = this.reservation._id
	},
	methods: {
		approveUser() {
            this.replyToUserFromOwner.isReply = true;
            this.$emit("replyToUserFromOwner", this.replyToUserFromOwner)
		},
		declineUser() {
            replyToUserFromOwner.isReply = false;
            this.$emit("replyToUserFromOwner", this.replyToUserFromOwner)
		},
	}
};
</script>
<style scoped>
.card {
	width: 30%;
	margin-bottom: 50px;
}
.card:hover {
	box-shadow: 0 0 15px 2px black;
	transition: 0.3s;
}
</style>

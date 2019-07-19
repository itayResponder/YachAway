<template>
<section>
    <h2>Messages</h2>
    <h1 v-if="!this.userLoggedInReservations[0]">You dont have any reservations try to 
        improve your yachts!
    </h1>
    <p v-else v-for="reservation in this.userLoggedInreservations" :key="reservation._id">
        {{reservation}}
    </p>
    <p>{{this.userLoggedInReservations}}</p>
</section>
</template>

<script>
export default {
    data() {
        return {
            userLoggedInReservations: []
        }
    },
    created() {
        this.userLoggedInReservations = this.$store.getters.userReservations
        console.log('UserMessages created: reservations:',this.userLoggedInReservations)
    }
}
</script>

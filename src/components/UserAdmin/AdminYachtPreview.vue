<template>
	<tr v-if="yacht">
        <td>{{yacht._id}}</td>
        <td>{{yacht.name}}</td>
        <td>{{yacht.owner.userFirstName}}</td>
        <td>{{yacht.pricePerNight}}</td>
        <td>{{yacht.maxPeopleOnBoard}}</td>
        <td><a class="card-footer-item">Edit</a>
        <a @click="removeYacht(yacht._id)" class="card-footer-item">Delete</a>
        </td>
			<!-- <footer class="card-footer">
				<a class="card-footer-item">Save</a>
				<a class="card-footer-item">Edit</a>
				<a @click="removeYacht(yacht._id)" class="card-footer-item">Delete</a>
			</footer> -->
	</tr>
</template>

<script>

export default {
	name: "AdminYachtPreview",
	props: ["yacht"],
	data() {
		return {};
	},
	created() {
	},
	methods: {
		removeYacht(yachtId) {
			this.$emit("emitRemoveYacht", yachtId);
		}
	},

	computed: {

	},
	components: {

	}
};
</script>

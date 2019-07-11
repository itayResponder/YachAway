<template>
	<section v-if="yachts">
		<div class="admin-table">
            <table border="2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Price Per Night</th>
                        <th>Max People On Board</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @emitRemoveYacht="removeYacht" v-for="yacht in yachts" :key="yacht._id" :yacht="yacht">
                        <td><admin-yacht-preview></admin-yacht-preview></td>
                    </tr>
                </tbody>
            </table>
		</div>
	</section>
</template>

<script>
import AdminYachtPreview from "../UserAdmin/AdminYachtPreview.vue";

export default {
	name: "AdminYachtList",
	props: ["yachts"],

	data() {
		return {};
	},
	created() {
		console.log('YachtList yachts:', this.yachts)
	},

	methods: {
		removeYacht(yachtId) {
			this.$emit("emitRemoveYacht", yachtId);
		},
		emitIsDone(yachtId) {
			this.$emit("isDone", yachtId);
		}
	},
	computed: {},
	components: {
		AdminYachtPreview
	}
};
</script>

<style>
    table {
        margin-right: 50%;
    }
</style>

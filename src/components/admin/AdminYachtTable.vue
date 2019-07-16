<template>
	<section class="margin-center">
		<!-- TOP LINE-->
		<b-field grouped group-multiline>
			<div class="control">
				<b-switch v-model="isBordered">Bordered</b-switch>
			</div>

			<b-select v-model="defaultSortDirection">
				<option value="asc">Default sort direction: ASC</option>
				<option value="desc">Default sort direction: DESC</option>
			</b-select>
			<b-select v-model="perPage">
				<option value="5">5 per page</option>
				<option value="10">10 per page</option>
				<option value="15">15 per page</option>
				<option value="20">20 per page</option>
			</b-select>
			<div class="control">
				<button class="button" @click="currentPage = 1">Set page to 1</button>
			</div>

			<!-- Clear selected -->
			<div class="control">
				<button class="button field is-danger" @click="selected = null" :disabled="!selected">
					<img v-show="selected" src="@/assets/icons/close.svg" alt="close" />
					<span>Clear selected</span>
				</button>
			</div>

			<!-- end EDIT / DELETE / DETAILS -->
			<div class="control">
				<b-button :disabled="!selected" class="button field" @click="editYacht()">
					<img src="@/assets/icons/file-document-edit-outline.svg" alt="edit" />
				</b-button>
			</div>
			<div class="control">
				<b-button :disabled="!selected" type="button field is-white" @click="detailsYacht()">
					<img src="@/assets/icons/information-outline.svg" alt="Details" />
					Details
				</b-button>
			</div>
			<div class="control">
				<b-button :disabled="!selected" type="button field is-white" @click="removeYacht()">
					<img src="@/assets/icons/delete-forever-outline.svg" alt="delete" />
				</b-button>
			</div>
			<div class="control">
				<b-button type="button field is-white" @click="addYacht()">
					<img src="@/assets/icons/plus-circle-outline.svg" alt="add" />
				</b-button>
			</div>
			<!-- end EDIT / DELETE / DETAILS -->

		</b-field>

		<!-- THE SORTING HERE ARE NOT BY THE SERVER-->
		<!-- TABLE -->
		<b-table  :data="yachts" :columns="columns" :paginated="isPaginated" :per-page="perPage" :current-page.sync="currentPage" :default-sort-direction="defaultSortDirection" sortable="true" default-sort="owner" :hoverable="true" :selected.sync="selected" :loading="isLoading" :mobile-cards="true" :bordered="isBordered">

			<!-- HEADER -->
			<template slot-scope="props" slot="header">
				<b-tooltip :active="!!props.column.meta" :label="props.column.meta" dashed>
					{{ props.column.label }}
				</b-tooltip>
			</template>

			<!-- CASE OF NO DATA -->
			<template slot="empty">
				<section class="section">
					<div class="content has-text-grey has-text-centered">
						<p>
							<b-icon icon="emoticon-sad" size="is-large">
							</b-icon>
						</p>
						<p>Nothing here.</p>
					</div>
				</section>
			</template>

		</b-table>

	</section>
</template>

<script>
import Swal from "sweetalert2";

export default {
	methods: {
		removeYacht() {
			if (!this.selected) return;
			console.log("id:", this.selected._id);
			Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#d33",
				cancelButtonColor: "#3085d6",
				confirmButtonText: "Yes, delete it!"
			}).then(result => {
				if (result.value) {
					this.$emit("emitRemoveYacht", this.selected._id);
					Swal.fire("Deleted!", "Your yacht has been deleted.", "success");
				}
			});
		},
		editYacht() {
			if (!this.selected) return;
			this.$router.push(`/admin/edit/${this.selected._id}`);
		},
		detailsYacht() {
			if (!this.selected) return;
			this.$router.push(`/admin/${this.selected._id}`);
		},
		addYacht() {
			this.$router.push(`/admin/edit`);
		}
	},

	data() {
		return {
			isBordered: false,
			defaultSortDirection: "asc",
			isPaginated: true,
			currentPage: 1,
			perPage: 5,
			isLoading: true,
			selected: null,
			columns: [
				{
					field: "_id",
					label: "Id",
					width: "40",
					numeric: false,
					sortable: true
				},
				{ field: "name", label: "Yacht Name", centered: true, sortable: true },
				{
					field: "owner.userFirstName",
					label: "Owner",
					centered: true,
					sortable: true,
					meta: "Only the first name at the moment"
				},
				{
					field: "pricePerNight",
					label: "Price Per Night",
					numeric: true,
					sortable: true
				},
				{
					field: "maxPeopleOnBoard",
					label: "Max People",
					centered: true,
					numeric: true,
					sortable: true
				},
				{
					field: "location.country",
					label: "Location",
					sortable: true
				},
				{
					field: "location.city",
					label: "City",
					sortable: true
				}
			]
		};
	},
	props: ["yachts"],
	mounted() {
		this.isLoading = false;
	}
};
</script>

<style scoped>
.margin-center {
	margin: 10px 30px;
}
</style>

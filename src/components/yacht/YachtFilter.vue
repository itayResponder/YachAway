<template>
	<section class=" is-right">
		<nav class="panel">
			<p class="panel-heading">
				<div class="field">
					<b-switch>Pro Services</b-switch>
					Skipper professionals, verified for quality.
				</div>
			</p>
			<!-- FILTERS -->

			<label class="panel-block">
				<p class="control has-icons-left">
					<select class="input is-medium is-fullwidth" v-model="filterBy.minPeople" @change="emitFilter">
						<option value="">Adults number</option>
						<option value="1">1-10</option>
						<option value="11">11-20</option>
						<option value="21">21-30</option>
					</select>
				</p>
			</label>
			<!-- TABS -->
			<p class="panel-tabs" style="margin-left:16px;">
				<a class="is-active">all</a>
				<a>star</a>
				<a>room facilities</a>
				<a>yacht facilites</a>
				<a>rare options</a>
			</p>
			<hr />
			<h3 class="title is-3">Filter By</h3>
			<!-- END TABS -->
			<h4 class="subtitle">room faclities</h4>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="wifi" type="is-info" @input="emitFilter">Wifi</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="tv" type="is-info" @input="emitFilter">Tv</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="towels" type="is-info" @input="emitFilter">Towels</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="safe" type="is-info" @input="emitFilter">Safe</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="AC" type="is-info" @input="emitFilter">AC</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="kitchen" type="is-info" @input="emitFilter">Kitchen</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="fridge" type="is-info" @input="emitFilter">Fridge</b-checkbox>
			</label>

			<br />
			<h4 class="subtitle">yacht faclities</h4>
			<label class="panel-block">

				<b-checkbox v-model="filterBy.facilities" native-value="golf court" type="is-info" @input="emitFilter">
					<b-tooltip type="is-success" label="for extra price">Golf Court

					</b-tooltip>
				</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="pool" type="is-info" @input="emitFilter">Pool</b-checkbox>
			</label>
			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="shnorkel" type="is-info" @input="emitFilter">Shnorkel</b-checkbox>
			</label>

			<label class="panel-block">
				<b-checkbox v-model="filterBy.facilities" native-value="nothing" type="is-info" @input="emitFilter">nothing</b-checkbox>
			</label>

			<!-- <p>{{filterBy.facilities}}</p> -->
			<select v-model="filterBy.sort" @change="emitFilter">
				<option value="">Sort By</option>
				<option value="name">Name</option>
				<option value="price">Price</option>

			</select>

			<!-- SEARCH BY TEXT -->
			<div class="panel-block">
				<p class="control has-icons-left">
					<input class="input is-small" placeholder="search" type="text" v-model="filterBy.txt" @input="emitFilter" />
					<span class="icon is-small is-left">
						<i class="fas fa-search" aria-hidden="true"></i>
					</span>
				</p>
			</div>

			<!-- <div class="content">
				<img src="@/assets/img/temp/filter-top.jpg" />
				<img src="@/assets/img/temp/filer-checkbox-1.jpg" />
				<img src="@/assets/img/temp/filer-checkbox-2.jpg" />
			</div> -->

		</nav>
	</section>
</template>

<script>
// @ is an alias to /src
export default {
	name: "yacht-filter",

	data() {
		return {
			filterBy: {
				minPeople: "",
				txt: "",
				facilities: [],
				sort: ""
			}
		};
	},
	created() {},
	methods: {
		emitFilter() {
			var filter = { ...this.filterBy };
			//    console.log('filter is = ',filter)
			this.$emit("set-filter", filter);
		}
	},

	computed: {},
	components: {}
};
</script>
<style scoped>
.facilities {
	display: flex;
}
</style>

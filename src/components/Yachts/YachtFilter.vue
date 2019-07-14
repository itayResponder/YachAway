<template>
	<section>

		<p class="title">Filter Side column</p>
		<p class="subtitle">With filter content</p>
		<div class="content">

		</div>

	</section>
</template>

<script>
// @ is an alias to /src
export default {
	name: "filter-list",

	data() {
		return {
			filterBy: {
				txt: ""
			}
		};
	},
	created() {},
	methods: {
		emitFilter() {
			var filter = { ...this.filterBy };
			// this.$emit("set-filter", filter);
		}
	},

	computed: {},
	components: {}
};
</script>

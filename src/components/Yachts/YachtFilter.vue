<template>
	<section>

		<p class="title">Filter Side column</p>
		<p class="subtitle">With filter content</p>
		<div class="content">
			<img src="@/assets/img/temp/filter-top.jpg" />
			<img src="@/assets/img/temp/filer-checkbox-1.jpg" />
			<img src="@/assets/img/temp/filer-checkbox-2.jpg" />
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

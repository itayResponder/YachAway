<template>
	<b-datepicker v-model="date" inline :unselectable-days="[]">
	</b-datepicker>
</template>

<script>
export default {
	data() {
		return {
			date: new Date()
		};
	}
};
</script>
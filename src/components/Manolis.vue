<template>
	<div>
		<h4>{{ msg }} {{ clickTimes }}</h4>
		<button v-on:click="increment">click me</button>
		<div v-if="won">
			<h4 class="won">
				You Won!!
			</h4>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		msg: String,
	},
	data() {
		return {
			clickTimes: 0,
			won: false,
		};
	},
	methods: {
		increment() {
			this.clickTimes++;
			if (this.clickTimes == 3) this.won = true;
			else if (this.clickTimes > 3) this.reset();
		},
		reset() {
			this.clickTimes = 0;
			this.won = false;
		},
	},
};
</script>

<style scoped>
.won {
	color: green;
}
</style>

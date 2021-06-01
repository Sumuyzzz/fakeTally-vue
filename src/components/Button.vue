<template>
	<button class="button" @click="$emit('click')">
		<slot />
	</button>
</template>

<script lang="ts">
	import Vue from "vue";
	import { Component } from "vue-property-decorator";

	@Component
	export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
	.button {
		background: #13c791;
		color: #fff;
		border: none;
		border-radius: 10px;
		padding: 0 16px;
		height: 30px;
	}
</style>
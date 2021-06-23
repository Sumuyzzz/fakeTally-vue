<template>
	<div class='numberPad'>
		<div class='output'>{{ output }}</div>
		<div class='buttons'>
			<button @click='inputContent' class='button1'>1</button>
			<button @click='inputContent' class='button2'>2</button>
			<button @click='inputContent' class='button3'>3</button>

			<button @click='inputContent' class='button4'>4</button>
			<button @click='inputContent' class='button5'>5</button>
			<button @click='inputContent' class='button6'>6</button>

			<button @click='inputContent' class='button7'>7</button>
			<button @click='inputContent' class='button8'>8</button>
			<button @click='inputContent' class='button9'>9</button>

			<button @click='inputContent' class='zero'>0</button>
			<button @click='inputContent' class='point'>.</button>

			<button @click='remove' class='remove'>
				<Icon name='backspace' />
			</button>
			<button @click='clear' class='clear'>
				<Icon name='clear' />
			</button>
			<button @click='ok' class='ok'>
				<Icon name='ok' />
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import { Component, Prop } from "vue-property-decorator";
	@Component
	export default class NumberPad extends Vue {
		@Prop(Number) readonly value!: number;
		output = this.value.toString();

		inputContent(event: MouseEvent): void {
			const button = event.target as HTMLButtonElement;
			const input = button.textContent as string;
			if (this.output.length === 15) {
				return;
			}
			if (this.output === "$0") {
				if ("123456789".indexOf(input) >= 0) {
					this.output = "$" + input;
				} else {
					this.output += input;
				}
				return;
			}
			if (this.output.indexOf(".") >= 0 && input === ".") {
				return;
			}
			this.output += input;
		}
		remove() {
			if (this.output.length === 2) {
				this.output = "$0";
			} else {
				this.output = this.output.slice(0, -1);
			}
		}
		clear() {
			this.output = "$0";
		}
		ok() {
			const number = parseFloat(this.output);
			this.$emit("update:value", number);
			this.$emit("submit", number);
			this.output = "$0";
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/assets/styles/help.scss";

	.numberPad {
		.output {
			@extend %clearFix;
			font-size: 36px;
			font-family: Consolas, monospace;
			padding: 9px 16px;
			text-align: right;
			color: #fff;
		}
		.buttons {
			background: #2e2f3a;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(3, 1fr);
			> button {
				background: #313446;
				border-style: none;
				color: #fff;
			}
		}

		.button1 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.button2 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.button3 {
			grid-area: 1 / 3 / 2 / 4;
		}
		.button4 {
			grid-area: 2 / 1 / 3 / 2;
		}
		.button5 {
			grid-area: 2 / 2 / 3 / 3;
		}
		.button6 {
			grid-area: 2 / 3 / 3 / 4;
		}
		.button7 {
			grid-area: 3 / 1 / 4 / 2;
		}
		.button8 {
			grid-area: 3 / 2 / 4 / 3;
		}
		.button9 {
			grid-area: 3 / 3 / 4 / 4;
		}
		.zero {
			grid-area: 4 / 1 / 5 / 3;
		}
		.point {
			grid-area: 4 / 3 / 5 / 4;
		}
		.remove {
			grid-area: 1 / 4 / 2 / 5;
		}
		.clear {
			grid-area: 2 / 4 / 3 / 5;
		}
		.ok {
			grid-area: 3 / 4 / 5 / 5;
		}
	}
</style>

<template>
	<div class="numberPad">
		<div class="output">{{ output }}</div>
		<div class="buttons">
			<div class="input">
				<button @click="inputContent" class="button">1</button>
				<button @click="inputContent" class="button">2</button>
				<button @click="inputContent" class="button">3</button>

				<button @click="inputContent" class="button">4</button>
				<button @click="inputContent" class="button">5</button>
				<button @click="inputContent" class="button">6</button>

				<button @click="inputContent" class="button">7</button>
				<button @click="inputContent" class="button">8</button>
				<button @click="inputContent" class="button">9</button>

				<button @click="inputContent" class="zero">0</button>
				<button @click="inputContent" class="point">.</button>
			</div>
			<div class="function">
				<button @click="remove" class="remove">退格</button>
				<button @click="clear" class="clear">清空</button>
				<button @click="ok" class="ok">完成</button>
			</div>
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
			if (this.output.length === 16) {
				return;
			}
			if (this.output === "0") {
				if ("123456789".indexOf(input) >= 0) {
					this.output = input;
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
			if (this.output.length === 1) {
				this.output = "0";
			} else {
				this.output = this.output.slice(0, -1);
			}
		}
		clear() {
			this.output = "0";
		}
		ok() {
			const number = parseFloat(this.output);
			this.$emit("update:value", number);
			this.$emit("submit", number);
			this.output = "0";
		}
	}
</script>

<style  lang="scss" scoped>
	@import "~@/assets/styles/help.scss";

	.numberPad {
		.output {
			@extend %clearFix;
			font-size: 36px;
			font-family: Consolas, monospace;
			padding: 9px 16px;
			text-align: right;
		}
		.buttons {
			@extend %clearFix;

			background: #eeeeee;
			display: grid;
			grid-template-columns: 2fr 1fr;

			> .input {
				height: 256px;
				display: grid;
				grid-template-rows: 1fr 1fr 1fr 1fr;
				grid-template-columns: 1fr 1fr 1fr;
				grid-row: -1;
				grid-row-gap: 1em;
				grid-column-gap: 1em;
				> button {
					border-radius: 8px;
					background: white;
					border: none;
				}
				> .zero {
					grid-column: 1/3;
				}
			}
			> .function {
				display: grid;
				grid-template-rows: 1fr 1fr 2fr;

				> button {
					background: white;
					border-radius: 8px;
					border: none;
				}
				> .ok {
					background: white;
				}
			}
		}
	}
</style>
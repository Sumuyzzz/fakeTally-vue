<template>
	<div>
		<label class="formItem">
			<span class="name">{{ this.fieldName }}</span>
			<template v-if="type === 'date'" class="date">
				<input
					:type="type || 'text'"
					:value="date(value)"
					@input="onValueChanged($event.target.value)"
					:placeholder="this.placeholder"
				/>
			</template>
			<template v-else class="notes">
				<input
					:type="type || 'text'"
					:value="value"
					@input="onValueChanged($event.target.value)"
					:placeholder="this.placeholder"
				/>
			</template>
		</label>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import { Component, Prop } from "vue-property-decorator";
	import dayjs from "dayjs";

	@Component
	export default class FormItem extends Vue {
		@Prop({ default: "" }) value!: string;
		@Prop({ required: true }) fieldName!: string;
		@Prop() placeholder?: string;
		@Prop() type?: string;
		onValueChanged(value: string) {
			this.$emit("update:value", value);
		}
		date(isoString: string) {
			return dayjs(isoString).format("YYYY-MM-DD");
		}
	}
</script>

<style lang="scss" scoped>
	.formItem {
		font-size: 14px;
		display: flex;
		padding-left: 16px;
		align-items: center;
		.name {
			padding-right: 16px;
		}
		> .notes {
			background: white;
		}
		> .date {
			background: white;
		}
		input {
			background: #fff;
			height: 44px;
			flex-grow: 1;
			background: transparent;
			border: none;
			padding-right: 16px;
		}
	}
</style>
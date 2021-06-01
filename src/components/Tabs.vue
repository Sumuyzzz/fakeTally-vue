<template>
	<ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
		<li
			class="tabs-item"
			v-for="item in dataSource"
			:class="liClass(item)"
			:key="item.value"
			@click="select(item)"
		>
			{{ item.name }}
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue from "vue";
	import { Component, Prop } from "vue-property-decorator";

	type dataSourceItem = {
		text: string;
		value: string;
	};

	@Component
	export default class Tabs extends Vue {
		@Prop({ required: true, type: Array })
		dataSource!: dataSourceItem[];
		@Prop(String)
		readonly value!: string;
		@Prop(String)
		classPrefix?: string;
		@Prop({ type: String, default: "64px" })
		height!: string;

		liClass(item: dataSourceItem) {
			return {
				[this.classPrefix + "-tabs-item"]: this.classPrefix,
				selected: item.value === this.value,
			};
		}

		select(item: dataSourceItem) {
			this.$emit("update:value", item.value);
		}
	}
</script>

<style scoped lang="scss">
	.tabs {
		display: flex;
		color: rgb(255, 0, 0);
		font-size: 24px;
		text-align: center;
		background: #ffffff;
		&-item {
			height: 64px;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			&.selected::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: 0;
				height: 4px;
				width: 100%;
				background: #13c791;
			}
		}
	}
</style>
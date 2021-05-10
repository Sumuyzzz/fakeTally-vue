<template>
	<Layout class-prefix="layout">
		<NumberPad :value.sync="record.amount" @submit="saveRecord" />
		<Tabs :data-source="recordTypeList" :value.sync="record.type" />
		<FormItem
			field-name="备注"
			placeholder="请输入备注"
			@update:value="onUpdateNoes"
		/>
		<Tags @update:value="record.tags = $event" />
	</Layout>
</template>

<script lang="ts">
	import FormItem from "@/components/Money/FormItem.vue";
	import NumberPad from "@/components/Money/NumberPad.vue";
	import Tags from "@/components/Money/Tags.vue";
	import Vue from "vue";
	import { Component } from "vue-property-decorator";
	import recordTypeList from "@/constants/recordTypeList";
	import Tabs from "@/components/Tabs.vue";

	@Component({
		components: { FormItem, Tags, NumberPad, Tabs },
	})
	export default class Money extends Vue {
		get recordList() {
			return this.$store.state.recordList;
		}

		recordTypeList = recordTypeList;

		//初始化数据
		record: RecordItem = {
			tags: [],
			notes: "",
			type: "-",
			amount: 0,
		};
		create() {
			this.$store.commit("fetchRecords");
		}
		onUpdateNoes(value: string) {
			this.record.notes = value;
		}
		saveRecord() {
			if (!this.record.tags || this.record.tags.length === 0) {
				return window.alert("请至少选择一个标签");
			}
			this.$store.commit("createRecord", this.record);
			if (this.$store.state.createRecordError === null) {
				window.alert("已保存");
				this.record.notes = "";
			}
		}
	}
</script>

<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
	}
	.notes {
		padding: 12px 0;
	}
</style>

<style lang="scss" scoped>
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
			> button {
				float: left;
				width: 25%;
				height: 64px;
				background: transparent;
				border: none;
				&.ok {
					height: 64px * 2;
					float: right;
				}
				&.zero {
					width: 25% * 2;
				}
				$bg: #f2f2f2;
				&:first-child {
					background: $bg;
				}
				&:nth-child(2),
				&:nth-child(5) {
					background: darken($bg, 4%);
				}
				&:nth-child(3),
				&:nth-child(6),
				&:nth-child(9) {
					background: darken($bg, 4% * 2);
				}
				&:nth-child(4),
				&:nth-child(7),
				&:nth-child(10) {
					background: darken($bg, 4% * 3);
				}
				&:nth-child(8),
				&:nth-child(11),
				&:nth-child(13) {
					background: darken($bg, 4% * 4);
				}
				&:nth-child(14) {
					background: darken($bg, 4% * 5);
				}
				&:nth-child(12) {
					background: darken($bg, 4% * 6);
				}
			}
		}
	}

	.FormItem {
		font-size: 14px;
		background: #f5f5f5;
		display: flex;
		padding-left: 16px;
		align-items: center;
		.name {
			padding-right: 16px;
		}
		input {
			height: 64px;
			flex-grow: 1;
			background: transparent;
			border: none;
			padding-right: 16px;
		}
	}
	.tags {
		display: flex;
		flex-grow: 1;
		font-size: 14px;
		padding: 16px;
		flex-direction: column-reverse;
		> .current {
			display: flex;
			flex-wrap: wrap;
			> li {
				background: #d9d9d9;
				$h: 24px;
				height: $h;
				line-height: $h;
				border-radius: $h/2;
				padding: 0 16px;
				margin-right: 12px;
			}
		}
	}
</style>


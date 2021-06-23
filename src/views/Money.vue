<template>
	<Layout class-prefix="layout">
		<NumberPad :value.sync="record.amount" @submit="saveRecord" />
		<Tabs
			:data-source="recordTypeList"
			:value.sync="record.type"
			classPrefix=""
		/>
		<div class="createAt">
			<FormItem
				field-name="日期"
				type="date"
				placeholder="请输入日期"
				:value.sync="record.createdAt"
			/>
		</div>

		<div class="notes">
			<FormItem
				type=""
				field-name="备注"
				placeholder="请输入备注"
				@update:value="onUpdateNoes"
			/>
		</div>
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
			createdAt: new Date().toISOString(),
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
		background: #eee;
	}
</style>

<style lang="scss" scoped>
	@import "~@/assets/styles/help.scss";

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


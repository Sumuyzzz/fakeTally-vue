<template>
	<Layout>
		<div class="navBar">
			<Icon class="leftIcon" name="left" @click="goback" />
			<span class="title">编辑标签</span>
			<span class="rightIcon" />
		</div>
		<div class="form-wrapper">
			<FormItem
				:value="currentTag.name"
				@update:value="updateTag"
				fieldName="标签名"
				placeholder="请输入标签名"
				type=""
			/>
		</div>
		<div class="button-wrapper">
			<Button @click="removeTag">删除标签</Button>
		</div>
	</Layout>
</template>

<script lang="ts">
	import Vue from "vue";
	import { Component } from "vue-property-decorator";
	import FormItem from "@/components/Money/FormItem.vue";
	import Button from "@/components/Button.vue";

	@Component({
		components: { FormItem, Button },
		computed: {
			tag() {
				return this.$store.state.current;
			},
		},
	})
	export default class EditLabel extends Vue {
		get currentTag() {
			return this.$store.state.currentTag;
		}
		created() {
			const id = this.$route.params.id;
			this.$store.commit("fetchTags");
			this.$store.commit("setCurrentTag", id);
			if (!this.currentTag) {
				this.$router.replace("/404");
			}
		}
		updateTag(name: string) {
			if (this.currentTag) {
				this.$store.commit("updateTag", {
					id: this.currentTag.id,
					name,
				});
			}
		}
		removeTag() {
			if (this.currentTag) {
				this.$store.commit("removeTag", this.currentTag.id);
				window.alert("删除成功");
			}
		}
		goback() {
			this.$router.back();
		}
	}
</script>

<style lang="scss" scoped>
	.navBar {
		text-align: center;
		display: flex;
		background: white;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		> .title {
			font-size: 16px;
		}
		> .leftIcon {
			width: 24px;
			height: 24px;
		}
		> .rightIcon {
			width: 24px;
			height: 24px;
		}
	}
	.form-wrapper {
		background: white;
		margin-top: 8px;
	}
	.button-wrapper {
		text-align: center;
		padding: 16px;
		margin-top: 44px;
	}
</style>
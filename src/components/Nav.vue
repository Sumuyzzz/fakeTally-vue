<template>
	<nav>
		<router-link to="/labels" class="item" active-class="selected">
			<Icon name="label" />
			标签
		</router-link>

		<router-link to="/money" class="item" active-class="selected">
			<Icon name="money" />
			记账
		</router-link>

		<router-link to="/statistics" class="item" active-class="selected">
			<Icon name="statistics" />
			统计
		</router-link>
	</nav>
</template>

<script lang="ts">
	export default {
		name: "Nav",
	};
</script>

<style lang="scss" scoped>
	nav {
		display: flex;
		flex-direction: row;
		font-size: 12px;
		> .item {
			padding: 2px 0;
			width: 33.33333%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: #fff;
			.icon {
				width: 24px;
				height: 24px;
			}
		}
		> .item.selected {
			color: #13c791;
		}
	}
</style>

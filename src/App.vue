<template>
	<div>
		<router-view />
	</div>
</template>

<style lang="scss">
	@import "~@/assets/styles/help.scss";
	@import "~@/assets/styles/reset.scss";
	body {
		font-family: $font-hei;
		color: #000;
		line-height: 1.5;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: rgba(49, 52, 70);
	}
</style>

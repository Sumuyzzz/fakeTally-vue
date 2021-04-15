<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
importAll(require.context("../assets/icons/svg", true, /\.svg$/));
export default {
  name: "Icon",
  props: [`name`],
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
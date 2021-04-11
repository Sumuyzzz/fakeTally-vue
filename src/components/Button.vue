<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  background: rgb(26, 25, 25);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
}
</style>
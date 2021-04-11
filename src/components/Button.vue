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
  background: rgb(109, 109, 109);
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
  }
  //&继承&-wrapper等价于.createTag-wrapper
}
</style>
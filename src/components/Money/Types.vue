<template>
  <div>
    <ul class="types">
      <li
        :class="{
          selected: value === '-',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectType('-')"
      >
        支出
      </li>
      <li
        :class="{
          selected: value === '+',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectType('+')"
      >
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Prop } from "vue-property-decorator";

@Component
export default class Type extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value", type);
  }
}
</script>

<style lang="scss" scoped>
.types {
  display: flex;
  font-size: 24px;
  text-align: center;
  background: #c4c4c4;
  > li {
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
      background: #333;
    }
  }
}
</style>
<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types",
  data() {
    return {
      type: "-",
    };
  },
  methods: {
    selectType(type) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.type = type;
    },
  },
};
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
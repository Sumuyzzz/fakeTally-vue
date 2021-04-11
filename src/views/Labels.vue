<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/TagList";
import Button from "@/components/Button.vue";

tagListModel.fetch();
@Component({ components: { Button } })
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签");
    if (name) {
      const message = tagListModel.create(name);

      if (message === "duplicated") {
        window.alert("标签名重复");
      } else if (message === "success") {
        window.alert("成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    svg {
      color: #333;
    }
  }
}
.createTag {
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


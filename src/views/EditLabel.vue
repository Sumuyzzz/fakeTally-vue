<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goback" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        :value="tag.name"
        @update:value="updateTag"
        fieldName="标签名"
        placeholder="请输入标签名"
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
import store from "@/store/dataStore";
import tagStore from "@/store/tagStore";

@Component({
  components: { FormItem, Button },
})
export default class EditLabel extends Vue {
  tag: tag = store.findTag(this.$route.params.id);
  created() {
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      tagStore.updateTag(this.tag.id, name);
    }
  }
  removeTag() {
    if (this.tag) {
      if (tagStore.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
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
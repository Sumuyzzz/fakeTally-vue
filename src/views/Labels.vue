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
    <div class="button-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import TagHelper from "@/mixin/TagHelper";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
  get tags() {
          return this.$store.state.tagList;
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

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44px;
}
</style>


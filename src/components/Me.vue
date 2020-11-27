<template>
  <div class="hello">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <div>22</div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "Me",
  props: {},
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>

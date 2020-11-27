<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <van-uploader :after-read="afterRead">
      <van-button icon="plus" type="primary">上传文件</van-button>
    </van-uploader> -->
    <router-view style="margin-bottom: 50px;"></router-view>

    <van-tabbar v-model="tabbar_active" active-color="#32BAC0" inactive-color="#979797">
      <van-tabbar-item badge="4" to="/home">
        <span style="font-weight:bold;">主页</span>
        <template #icon="props">
          <img :src="props.active ? icon_home.active : icon_home.inactive" />
        </template>
      </van-tabbar-item>
      
      <van-tabbar-item badge="" to="/dash">
        <span style="font-weight:bold;">监控台</span>
        <template #icon="props">
          <img :src="props.active ? icon_data.active : icon_data.inactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item badge="1" to="/me">
        <span style="font-weight:bold;">我的</span>
        <template #icon="props">
          <img :src="props.active ? icon_me.active : icon_me.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {},
  data() {
    return {
      tabbar_active: 0,
      icon_home: {
        active: require("@/assets/icon_home_active.png"),
        inactive: require("@/assets/icon_home_inactive.png"),
      },
      icon_data: {
        active: require("@/assets/icon_data_active.png"),
        inactive: require("@/assets/icon_data_inactive.png"),
      },
      icon_me: {
        active: require("@/assets/icon_me_active.png"),
        inactive: require("@/assets/icon_me_inactive.png"),
      },
    };
  },
  methods: {
    afterRead(e) {
      this.onUploadFile(e.file, 1, 6, 7);
    },
    onUploadFile(file, major, minor, patch) {
      let forms = new FormData();
      let configs = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      forms.append("file", file);
      this.axios
        .post(
          "http://r3inbowari.top:2999/upload/pear?major=" +
            major +
            "&minor=" +
            minor +
            "&patch=" +
            patch,
          forms,
          configs
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
</style>

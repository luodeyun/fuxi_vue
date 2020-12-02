<template>
  <div id="app">
 <router-view></router-view>
 <Hello-vue >
  <div slot='right'>sssssssssdddddddddddddddddddd</div>
 </Hello-vue>
 <Hello-vue>
 </Hello-vue>
  </div>
</template>
<script>
import HelloVue from "./components/HelloVuex";
export default {
  name: "App",
  components: {
    HelloVue
  },
  data() {
    return {
      message: "是app组件",
      counter: 1,
      id:1
    };
  },
  mounted() {
    console.log(this.Bus,'1');
  },
  methods: {
    chakan() {
      console.log(this.$children, "儿子");
      console.log(this.$refs);
    },
    addition() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    }
  }
};
</script>
<style>
</style>

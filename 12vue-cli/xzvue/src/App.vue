<template>
  <div id="app">
    <button @click='gohome'>去home</button>
    <button @click='goabout'>去about</button>
    <button @click='go'>去查看</button>
 <router-view></router-view>
 <Hello-vue >
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
    // console.log(this.Bus,'1');
  },
  methods: {
    go(){
      console.log(this.$route);
      console.log(this.$router);
      
    },
    gohome(){
      this.$router.push(
        {
      path:'home',
      query:{
         path:'word',
          age:18

     }   })
        console.log(this.$route,'this.$route');
        console.log(this.$router,'this.$router'); 
        
    },
    goabout(){
      this.$router.push(
        {
          name:'about',
          params:{
             id:8,
            
          }
        }
      ),
      console.log(this.$route,'this.$route');
        console.log(this.$router,'this.$router'); 
    },
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

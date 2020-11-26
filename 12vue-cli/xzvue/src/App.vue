<template>
  <div id="app">
    <h2>----------App内容----------</h2>
  <h2>{{message}}</h2>
  <button @click='addition'>{{$store.state.count}}</button>  
  <button @click='sub'>--</button>
  <button @click='chakan'>{{this.bus}}</button>
  <h2>------------hello内容----------</h2>
 <Hello-vue :counter='counter' ref='aaa'></Hello-vue>
 <h3>---------------------------------------</h3>
 <router-link :to="`/home/${id}`" tag='button'>点我去home</router-link>
 <router-link to='/about' tag='button'>点我去about</router-link>
 <router-view></router-view>
 <Hello-vue ></Hello-vue>
 <Hello-vue><template v-slot='soltProps'>
     {{soltProps.sg}}

 </template></Hello-vue>
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
    console.log(this.$router);
    console.log(this.$route);
    console.log(HelloVue);
    
    
  },
  methods: {
    chakan() {
      console.log(this.bus++);
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

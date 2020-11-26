<template>
     <div >
         <h2>{{$store.state.count}}</h2>
         <slot :sg='sg'>{{mess}}</slot>
         <button @click='btns'>查看Hello组件</button>
    </div>
</template>
<script>
export default {
  name: "HelloVuex",
  props: {
    counter: Number
  },
  data() {
    return {
      mess: "1",
      sg:['Angular','Vue','React','jQuery']
    };
  },
  methods: {
    btns() {
      this.$store.state.count++;
    }
  },
  mounted() {
    this.axios.get ('',{
      params:{
        appkey:'uNIKUq+qSeRcshQufXsxk5khRF4AAAAADvkmRJ1HL4sAAAAAAAAAAA==',
        json:'{phone:13758835575}'
      }
    }).then(reslove=>{
      console.log(this);
      
      console.log(reslove);
    })
  },
};
</script>
<style>
</style>
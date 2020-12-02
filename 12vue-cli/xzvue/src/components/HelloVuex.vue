<template>
     <div >
         <h2>{{$store.state.count}}</h2>
         <!-- <slot :name='sg'>{{mess}}</slot> -->
         <slot name='left'>left</slot><br/>
         <slot name='center'>center</slot><br/>
         <slot name='right'> {{mess}}</slot>
        
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
  }
};
</script>
<style>
</style>
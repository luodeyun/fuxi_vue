import Vue from 'vue'
import Vuex from 'vuex'
//1.安装插件
Vue.use(Vuex)
//2.创建对象
const store = new Vuex.Store({
state:{
    count:1000
},
mutations: {
   //方法
   increment(state){
      state.count++
   } ,
   decrement(state){
       state.count--
   }
},
actions: {  
},
getters:{},
modules:{}
})
// 3.导出store对象
export default store
      <template>
          <div >
         <h2>{{$store.state.count}}</h2>
         <button @click='btns'>查看Hello组件</button>
  
          </div>
      </template>;
      <script>
       export default{ 
         name:'HelloVuex',
         props: {
             counter:Number
         },
         data(){
             return{
                 mess:'1'
             }
         },
         methods:{
             btns(){
                 this.$store.state.count++
             }
         }
       }
      </script>
      <style>

     </style>
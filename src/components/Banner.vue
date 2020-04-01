<template>
    <div class = "banner">
        <img  v-for = "(v,i) in imgArr" :key="i"    :src="v"  v-show="n==0">
        <div>
            <ul>
                <li :class = "n==i?'selected':''" v-for="(v,i) in imgArr"></li>
                <li class = "selected"></li>
                <li class = "selected"></li>
                <li class = "selected"></li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name : 'Banner',
        data(){
         return {
             //清除定时器
             timer: null,
             n:0,
             lists:[
                 {title:'美食',icon:'',color:''},
                 {title:'',icon:'',color:''},
                 {title:'',icon:'',color:''},
                 {title:'',icon:'',color:''}
             ],
             imgArr:[
                 require('../assets/img/1.jpg'),
                 require('../assets/img/2.jpg'),
                 require('../assets/img/3.jpg')
             ]
         }
     },
     // 传递参数 用props接收 数组定义
     //props:["imgArr"],

     //传递的是对象
     props:{
        imgArr:{

        },
        obj:{
            id:Number,
            name:String
        }
     },
     methods:{
         play(){  //添加定时器，间隔2秒钟 
             this.timer = setIntterval(this.autoPlay,2000)
         },
         autoPlay(){
             this.n++,
             if(this.n == this.imggArr.length){
                this.n = 0 ;
             }
         }
     },
     mounted:function(){  // 挂载完成
         this.play();
     },
     destroyed:function(){ //销毁
         cleanInterval(this.timer)
     }
    }

</script>

<!-- scoped 代表私有属性-->
<stryle scoped>

</stryle>
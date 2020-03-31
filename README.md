
# 第一课时

## 单应用页面
## 组件
## 路由 
## 生命周期

# 第二课时

## 默认路由样式定义
## 组件的定义及传参
## 导航栏模块
## 轮播图

### 两个花括号代表{{}}：是vue中表达式 ，浏览器会按js来解析
### v-for : （list,i）in lists 代表就是js  v-bing 是动态加载
### ：style = “{background:list.color}”样式时候是键值对，所以需要花括号

## 轮播图：
>> v-show="" 是否隐藏
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
export default {
     name: 'Home',
     data(){
         return {
           ...
             <!-- 清除定时器 -->
             timer: null;
             n:0,
             lists:[
                 {title:'',icon:'',color:''},
                 {title:'',icon:'',color:''},
                 {title:'',icon:'',color:''},
                 {title:'',icon:'',color:''}
             ],
             imgArr:[
                 require('../assets/img/1.jpg'),
                 require('../assets/img/2.jpg'),
                 require('../assets/img/3.jpg')
             ]
             ....
         }
     },
     methods:{
         play(){  <!-- 添加定时器，间隔2秒钟-->
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

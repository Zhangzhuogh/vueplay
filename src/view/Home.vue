<template>
    <div class = "home">
        <img alt = "Vue logo" src="../assets/logo.png">
    </div>
    <Banner :imgArr = "imgArr" />
</template>

<script>
    //导入banner文件
    import Banner from '../components/Banner';

    export default{
        name : 'Home',
        data(){
            return {
             //清除定时器
             timer: null,
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
         }
        },
        components:{
            Banner
        }
    }
</script>
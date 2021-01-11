<template >
<div class="contner">
    <van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh">

    <div class="jiazai" v-show="isloing">
        <van-loading size="24px">正在加载...</van-loading>
    </div>
    <van-card v-for="item in list" :key="item.filmId" @click="goXiangqing(item.filmId)" >
         
        <!-- 电影封面 -->
        <template #thumb>
            <img :src="item.poster" width="66" class="#thumb">
        </template>
        <!-- 电影标题 -->
        <template #title >
            <div class="title">
                {{item.name}} <span class="item">2D</span>
            </div>
        </template>
        <!-- 电影描述 -->
        <template #desc>
            <div class="desc">
            <div>观众评分 <span class="pingfen">{{item.grade}}</span></div>
            <div>主演:{{item.actors | parseActors }}</div>
            <div>{{item.nation}} | {{item.runtime}}分钟</div>
            </div>
            <div class="goupiao">购票</div>

        </template>

</van-card>

</van-pull-refresh>
</div>
<!-- 导入卡片 -->

</template>
<script>
// 导入loing
import Vue from 'vue';
import { Loading , Toast , Card , PullRefresh} from 'vant';

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(PullRefresh);
// Vue.use(Button);

// 导入地址组件
import uri from '@/config/uri'
export default {
    data(){
        return{
            list:[],
            isloing:true,
            // 控制下拉
            isLoading:true,
            pageNum:1
        }
    },
    filters:{
        parseActors(actors){
            // 因为卖座网可能没有主演,所以需要进行判断
            if(actors){
                let str = ''
                actors.forEach((el) => {
                    str += el.name + '  ' 
                    
                } )
                return str.substring(0,20) + '...'
            }else{
                    return '暂无主演'
                }             
        }
    },
    methods:{
        onRefresh(){
            this.getdata()
        },
        getdata(){
            this.$https.get(uri.getNowPlaying + '?pageNum=' + this.pageNum).then(ret => {
            if(status == 0 ){
                if(this.pageNum <= Math.ceil(ret.data.total / 10)){
                    this.list = [...ret.data.films,...this.list ]
                    this.pageNum++
                }               
            }else{
                Toast('网络繁忙');
            }
            this.isloing = false
            this.isLoading=false
        })
        },
        goXiangqing(filmId){
            this.$router.push('/film/' + filmId)
        }
    },
    created(){
        this.getdata()
        
    }
}
</script>
<style lang="scss" scoped>
.jiazai{
    text-align: center;
    margin-top: 20px;
}
.item{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.thumb{
    border-radius: 0%;
}
.title{
    font-size: 16px;
    font-weight:500 ;
}
.pingfen{
    color: orange;
}
.desc{
    font-size: 12px;
    color:#797d82 ;
    float: left;
}
.goupiao{
    color: orange;
    border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    float: right;
    margin-right:5px ;
    }
.contner{
    margin-bottom: 50px;
}

</style>
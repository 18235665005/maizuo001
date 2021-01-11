<template >
<div class="contner">
<van-list
  v-model="isloing"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>

    <!-- <div class="jiazai" v-show="isloing">
        <van-loading size="24px">正在加载...</van-loading>
    </div> -->
    <van-card v-for="item in list" :key="item.filmId">
        <!-- 电影封面 -->
        <template #thumb >
            <img :src="item.poster" width="66" id="thumb">
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
            <div>主演:{{item.actors | parseActors }}</div>
            <div>上映时间:{{item.premiereAt|parseTime}}</div>
            </div>
            <div class="goupiao">预购</div>

        </template>
</van-card>
</van-list>
</div>
<!-- 导入卡片 -->

</template>
<script>
// 导入loing
import Vue from 'vue';
import { Loading , Toast , Card , List } from 'vant';

// 导入第三方moment
import moment from 'moment'

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(List);
// Vue.use(Button);
// 导入地址组件
import uri from '@/config/uri'
export default {
    data(){
        return{
            list:[],
            isloing:true,
            // 控制下拉
            pageNum:1,
            finished:false
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
        },
        // 格式化时间
        parseTime(time){
            var arr = ['周日','周一','周二','周三','周四','周五','周六']
            const week = arr[moment(time * 1000).format('d')]
            const day = moment(time * 1000).format('D')
            const month = moment(time * 1000).format('M')

            return `${week}  ${month}月 ${day}日 `
        }
    },
    methods:{
        onLoad(){
            this.getdata()
        },
        getdata(){
            this.$https.get(uri.getComingSoon + '?pageNum=' + this.pageNum).then(ret => {
            if(status == 0 ){
                if(this.pageNum <= Math.ceil(ret.data.total / 10)){
                    this.list = [...this.list ,...ret.data.films]
                    this.pageNum++
                }else{
                    this.finished = true
                }               
            }else{
                Toast('网络繁忙');
            }
            this.isloing = false
            this.isLoading=false
        })
        },
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
#thumb{
    border-radius: 0%;
}
.title{
    font-size: 16px;
    font-weight:500 ;
    margin-top: 20px;
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
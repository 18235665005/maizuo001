<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change='changeel'>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-dianying" slot="icon" size="1.3rem" /><span>电影</span></van-tabbar-item>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-yingyuan" slot="icon" size="1.3rem" /><span>影院</span></van-tabbar-item>
        <van-tabbar-item ><van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.3rem" /><span>我的</span></van-tabbar-item>
        </van-tabbar>
    </div>    
</template>
<script>
// 导入iconfon css
import '@/assets/icon/iconfont.css'

import Vue from 'vue';
import { Tabbar, TabbarItem , Icon} from 'vant';

Vue.use(Tabbar);
Vue.use(Icon);
Vue.use(TabbarItem);
export default {
    data(){
        return{
            active:0,
            urls:['/films/NowPlaying' , '/cinemas', '/center']
        }
    },
    created(){
        // console.log(this.$route)
    this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0
        },
    methods:{
        changeel(index){
            this.$router.push(this.urls[index])
        }
    }
}
</script>
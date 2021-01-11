<template>
    <div :class="{header:is_top}">
        <van-tabs v-model="active" @click="onClick">
        <van-tab title="正在热映"></van-tab>
        <van-tab title="即将上映"></van-tab>
</van-tabs>
    </div>
</template>
<script>
// 导入tab
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
        return{
            active:0,
            urls:['/films/NowPlaying','/films/comingSoon'],
            // 滚动是否显示顶部导航
            is_top:false
        }
    },
    created(){
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0
    },
    mounted(){
        window.addEventListener('scroll',() => {
            let scorll = document.documentElement.scrollTop
            scorll > 150 ? this.is_top = true : this.is_top = false
        } )
    },
    methods: {
    onClick(index,title) {
        this.$router.push(this.urls[index])
    },
},
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    z-index: 999;
    width: 100%;
}
</style>
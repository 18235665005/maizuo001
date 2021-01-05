<template>
    <div>
        <van-tabs @click="onClick">
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
            urls:['/films/NowPlaying','/films/comingSoon']
        }
    },
    methods: {
    onClick(index) {
        console.log(this.$router)
    this.$router.push(this.urls[index])
    },
},
}
</script>
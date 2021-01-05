<template>
<div>
    <Header/>
    <router-view></router-view>
</div>
</template>
<script>
// 导入header组件 因为只有电影模块需要使用,所以此组件放在这,而footer需要所有页面使用,所以放在根视图
import Header from '@/components/Navgation/Header'
export default {
    components:{
        Header
    }
}
</script>
<template>
<div>
    <!-- 显示图片 -->
    <div> </div>
</div>
</template>
<script>
import uri from '@/config/uri'
export default {
    created(){
        console.log(this.$route)
        this.$https.get(uri.getDetail + '?filmId=' + this.$route.params.filmId).then((ret) => {
            console.log(ret)
        })
    }
}
</script>

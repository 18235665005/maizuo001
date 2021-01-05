<template>
  <div id="app">
    <Footer/>
    <router-view/>
  </div>
</template>
<script>
import Footer from '@/components/Navgation/Footer'
export default {
  components: { Footer },
}
</script>
<style lang="scss">

</style>

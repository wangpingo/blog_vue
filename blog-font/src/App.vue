<template>
  <div id="app" style="height:2000px">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  // 注册
  components: {
    // <my-component> 将只在父模板可用
    'm-header': Header
  }
}
</script>

<style>
    
  #app {
    font-family: "Microsoft YaHei",Helvetical,Arial,"Luida Grande",Tahoma,sans-serif;;
  }
  body{
    background-image: url(./assets/img/bg.png);
  }
</style>

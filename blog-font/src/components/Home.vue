<template>
  <div class="home">
    <div class="warnTitle"><i class="iconfont icon-xiaolaba"></i>任何个人或团体转载蛙牛博客文章请您著名出处，谢谢合作！</div>
    <div class="main">
      <div class="left">
        <slideShow class="slideShow"></slideShow>
      </div>
      <div class="right">
          1111
      </div>
    </div>
  </div>
</template>

<script>

import slideShow from '../moduleUtil/slideShow.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'slideShow':slideShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
      margin: 0 auto;
      max-width: 1200px;
    }
    .warnTitle{
      margin: 4px auto 0 auto;
      height: 20px;
      line-height: 20px;
      margin-left: 20px;   
    }
    .warnTitle:hover{
      color: #2f889a;
    }
  @media screen and (min-width:900px) {
    .slideShow{
      width: 100%;
    }
    .main{
      display: flex;
      padding: 0 15px 0 15px
    }
    .left{
      flex: 2.5;
      
      height: auto;
    }
    .right{
      margin-left: 15px;
      flex: 1;
      
      height: 20px;
    }
  }
  @media screen and (max-width:899px){
    
  }
</style>

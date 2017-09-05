<template>
    <div class="m-header">
        <div class="top-header">
            <span class="info">{{promptInformation}}</span>
            <div class="top-tap">
                <span><i class="iconfont icon-wenzhang"></i>文章分类</span>
                <span><i class="iconfont icon-jian"></i>好文推荐</span>    
                <span><i class="iconfont icon-m-developmentCourse"></i>写作历程</span>    
                <span><i class="iconfont icon-shenghuo"></i>生活散文</span>                           
            </div>
        </div>
        <div class="top-nav">
           <img src="../assets/img/waniu.gif" alt="">     
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Header',
    data () {
        return {
            scrolled:0,
        }
    },
    computed: {
        ...mapGetters({
             promptInformation: 'helloInfo'
        })
    },
    methods:{
        handleScroll(){
            this.scrolled = window.scrollY;
            console.log(this.scrolled);
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
    @media screen and (min-width:900px) {
        .m-header .top-header{
            margin:0 auto;
            height:40px;
            background:#e7e7e7;
            line-height:40px;
            font-size:14px;
            position:relative;
            max-width:1200px;
        }
        .top-header .info{
            margin-left: 20px; 
        }
        .top-tap{
            position:absolute;
            right:20px;
            top:0;
            font-size:15px;
        }
        i{
            display:inline-block;
            margin-right:5px;
        }
        .top-tap span{
            margin-left:20px
        }
        span:hover{
            color:#2f889a
        }
        .top-nav{
            width: 100%;
            height: 70px;
            background: #fff;
        }
        .top-nav img{
            margin: 5px 0 0 10px ;
            display: inline-block;
            height: 60px;
        }
    }

    @media screen and (max-width:899px) {
        .m-header .top-header{
            display:none;
        }
    }

</style>
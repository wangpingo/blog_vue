<template>
    <div class="m-header">
        <div class="top-header">
            <span class="info">{{promptInformation}}</span>
            <div class="top-tap">
                <span class="span-hover"><i class="iconfont icon-wenzhang"></i>文章分类</span>
                <span class="span-hover"><i class="iconfont icon-jian"></i>好文推荐</span>    
                <span class="span-hover"><i class="iconfont icon-m-developmentCourse"></i>写作历程</span>    
                <span class="span-hover"><i class="iconfont icon-shenghuo"></i>生活散文</span>                           
            </div>
        </div>
        <div class="top-nav">
            <div class="nav-cont">
                <img src="../assets/img/waniu.gif" alt="">
                    <!-- 这个日后可以修改成接口 -->
                <div class="nav-class">
                    <ul class='nav-list'>
                       <span class="search"><i class="iconfont icon-sousuo"></i></span>
                       <li @click="getSelectTap(6)" :class="{ selectClass: selectTap===6 }"><i class="iconfont icon-guanyuwomen"></i>关于博客</li>
                       <li @click="getSelectTap(5)" :class="{ selectClass: selectTap===5 }"><i class="iconfont icon-liuyan"></i>给我留言</li>     
                       <li @click="getSelectTap(4)" :class="{ selectClass: selectTap===4 }"><i class="iconfont icon-ziyuan"></i>资源分享</li>     
                       <li @click="getSelectTap(3)" :class="{ selectClass: selectTap===3 }"><i class="iconfont icon-qianduanjishu"></i>技能学习</li>     
                       <li @click="getSelectTap(2)" :class="{ selectClass: selectTap===2 }"><i class="iconfont icon-jichuzhishi"></i>基础知识</li>     
                       <li @click="getSelectTap(1)" :class="{ selectClass: selectTap===1 }"><i class="iconfont icon-shouye"></i>首页</li>
                    </ul>
                </div>    
            </div>  
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Header',
    data () {
        return {
            scrolledFlag:false, // 控制导航栏的吸附效果
        }
    },

    computed: {
        // 得到用户信息,验证是否登陆
        ...mapState({
            selectTap: state => state.header.selectTap
        }),
        ...mapGetters({
             promptInformation: 'helloInfo'
        })
    },
    methods:{
        ...mapActions([
            "getSelectTap"
        ]),
        handleScroll(){
            let scrolled;
            scrolled = window.scrollY;
            if(scrolled>40){
                this.scrolledFlag = true;
            }else{
                this.scrolledFlag = false;
            }
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
        .top-tap i{
            color:gray;
        }

        i{
            display:inline-block;
            margin-right:5px;
        }
        .top-tap .span-hover{
            margin-left:20px
        }
        .span-hover:hover{
            color:#2f889a
        }
        .top-nav{
            width: 100%;
            height: 70px;
            background: #fff;
        }
        .top-nav .nav-cont{
            max-width:1200px;
            margin:0 auto;
        }
        .top-nav img{
            margin: 5px 0 0 10px ;
            display: inline-block;
            height: 60px;
        }
        .top-nav .nav-class{
            height:70px;
            float:right;
        }
        .top-nav li{
            float:right;
            padding:0 10px;
            height:70px;
            line-height:70px;
            font-size:14px;
        }
        .top-nav li:hover{
            background:#666;
            color:#fff;
        }
        .selectClass{
            background:#c40000 !important;
            color:#fff;
        }
        .search{
            margin-top:19px;
            display:inline-block;
            float:right;
            background:#2f889a;
            width:12px;
            height:12px;
            padding:10px;
            margin-left:20px;
            border-radius:2px;
        }
        .search:hover{
            background:#666;            
        }
        .icon-sousuo{
            display:inline-block;
            font-size:12px;
            color:#FFF;
        }
    }

    @media screen and (max-width:899px) {
        .m-header .top-header{
            display:none;
        }
    }

</style>
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
        <div class="top-nav" :class="{ topTransition:scrolledFlag}">
            <div class="nav-cont">
                <img src="../assets/img/waniu.gif" alt=""  :class="{topTransitionImg:scrolledFlag}">
                    <!-- 这个日后可以修改成接口 -->
                <div class="nav-class">
                    <ul class='nav-list'>
                       <span class="search" @click="showSearch"><i class="iconfont icon-sousuo"></i></span>
                       <li @click="getSelectTap(6)" :class="{ 'selectClass': selectTap===6}" :style="topTransitionLi"><i class="iconfont icon-guanyuwomen"></i>关于博客</li>
                       <li @click="getSelectTap(5)" :class="{ 'selectClass': selectTap===5}" :style="topTransitionLi"><i class="iconfont icon-liuyan"></i>给我留言</li>     
                       <li @click="getSelectTap(4)" :class="{ 'selectClass': selectTap===4}" :style="topTransitionLi"><i class="iconfont icon-ziyuan"></i>资源分享</li>     
                       <li @click="getSelectTap(3)" :class="{ 'selectClass': selectTap===3}" :style="topTransitionLi"><i class="iconfont icon-qianduanjishu"></i>技术学习</li>     
                       <li @click="getSelectTap(2)" :class="{ 'selectClass': selectTap===2}" :style="topTransitionLi"><i class="iconfont icon-jichuzhishi"></i>计算机基础</li>     
                       <li @click="getSelectTap(1)" :class="{ 'selectClass': selectTap===1}" :style="topTransitionLi"><i class="iconfont icon-shouye"></i>首页</li>
                    </ul>
                </div> 
                <!-- 移动端的显示状态 -->
                <div class="nav-mList">
                    <span class="goSide"><i class="iconfont icon-santiaogang"></i></span>
                    <span class="search" @click="showSearch"><i class="iconfont icon-sousuo"></i></span>
                </div>

                <div class="searchInput" ref="searchAera">
                    <div class="flex-item">
                        <input class="inputContent" @blur="changeInput($event)" @focus="changeInput($event)" placeholder="请输入关键字查询">
                        <span  class="inputButton">站内搜索</span>
                    </div>

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
            scrolledFlag:false,  // 控制导航栏的吸附效果
            searchInput:false,   //搜索框
        }
    },

    computed: {
        // 得到用户信息,验证是否登陆
        ...mapState({
            selectTap: state => state.header.selectTap
        }),
        ...mapGetters({
             promptInformation: 'helloInfo'
        }),
        topTransitionLi:function () {
            return{
                marginLeft:( this.scrolledFlag==true?'10px':'0px')
            }
        }
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
        },
        showSearch(){
            this.searchInput=!this.searchInput;
            this.searchInput===true?this.$refs.searchAera.style.display='none':this.$refs.searchAera.style.display='block';
        },
        changeInput(e){
            if(e.target.style.background===''){
              e.target.style.background="#fff";
            }else{
                e.target.style.background="";
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>

    .top-nav{
        width: 100%;
        height: 70px;
        background: #fff;
    }
    .topTransition{
        position: fixed;
        top:0;
        background-color:rgba(255, 255, 255,0.5);
    }
    .searchInput{
        position:relative;
        top:20px;
        max-width:1200px;
        padding:10px 20px;
        background:#fff;
        box-shadow:rgb(0,0,0) 0 0 15px;
        background-color:rgba(255, 255, 255,0.5);
    }
    .flex-item{
        display:flex;
    }
    .inputContent{
        display:block;
        flex:2.3;
        height:37px;
        font-size:14px;
        border:1px solid #ccc;
        border-radius:2px 0 0 2px;
        background-color:transparent; 
    }
    .inputContent::selection{
        background:#fff;
    }
    .inputButton{
        display:block;
        flex:1;
        text-align:center;
        line-height:37px;
        background:#2f889a;
        font-size:14px;
        color:#fff;
        border-radius:0 2px 2px 0;
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
            margin-left:0px;
            transition: 1s;
            transition-duration: 1s;
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
        .nav-mList{
            display:none;
        }
    }

    @media screen and (max-width:899px) {
        .m-header .top-header{
            display:none;
        }
       .top-nav{
            width: 100%;
            height: 40px;
            background: #fff;
        }
        .top-nav img{
            height: 30px;
        }
        .nav-class{
            display: none;
        }
        .nav-mList{
            float:right;
            height:40px;
        }
        .goSide,.search{
            display:inline-block;
            line-height:40px;
            margin-right:18px;
        }
    }

</style>
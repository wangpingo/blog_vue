<template>
        <div class="content" @mouseover="shoeSlide" @mouseout="hideSlide">
            <ul ref="imageScroll">
                <li><img src="../assets/img/1.jpg" :class="{active:currentImg==0}"></li>
                <li><img src="../assets/img/2.jpg" :class="{active:currentImg==1}"></li>
                <li><img src="../assets/img/3.jpg" :class="{active:currentImg==2}"></li>
                <li><img src="../assets/img/4.jpg" :class="{active:currentImg==3}"></li>
                <li><img src="../assets/img/5.jpg" :class="{active:currentImg==4}"></li>
            </ul>
            
            <a class="next" ref="arrowLeft"><i class="iconfont icon-rightarrowsmall"></i></a>
            <a class="prev"  ref="arrowRight"><i class="iconfont icon-zuoyoujiantou-copy-copy"></i></a>
            <span class="textCoding">两弯似蹙非蹙笼烟眉，一双似喜非喜含情目。</span>
            <div class="selectButton">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </div>
</template>

<script>
    export default{
        data(){
            return{
                showFlag:false,
                currentImg:4,
                interval:null
            }
        },
        methods:{
            shoeSlide(){
                this.$refs.arrowLeft.style.opacity="1";
                this.$refs.arrowRight.style.opacity="1";
            },
            hideSlide(){
                this.$refs.arrowLeft.style.opacity="0";

               this.$refs.arrowRight.style.opacity="0"; 
            },
            switch(){
                // console.log(111);
                console.log(this.$refs)
            },
            bindScroll(){
                this.interval=setInterval(this.switch,2000)
            },
            clearScroll(){
                clearInterval(this.interval);
            }
        },
        created(){
           this.bindScroll();
        },
        destroyed(){
            this.clearScroll();
        }
    }
</script>

<style scoped>
    .content{
        display: inline-block;
        /* max-width: 850px;
        max-height: 330px; */
        border: 1px solid #DDD;
        position: relative;
        height: auto;
    }
    .active{
        display: inline-block;
    }
    img{
        width: 100%;
        height: auto;
        display: none;
    }
    .prev,.next{
        transition: .5s;
        display: inline-block;
        position: absolute;
        top:50%;
        margin-top:-25px;
        height: 50px;
        width: 50px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3)
    }
    .prev{
        left: 0;
        border-radius: 0 2px 2px 0;
    }
    .next{
        right:0;
        border-radius: 2px 0 0 2px;
    }
    .icon-rightarrowsmall,.icon-zuoyoujiantou-copy-copy{
        display: inline-block;
        position: absolute;

        font-size: 30px;
    }
    .icon-rightarrowsmall{
        
        top:50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -16px;
    }
    .icon-zuoyoujiantou-copy-copy{

        font-size: 35px;    
        top:50%;
        left: 50%;
        margin-left: -17px;
        margin-top: -19px;
    }
    .textCoding{
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        color: #fff;
        text-indent: 10px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 400;
        background: rgba(216,0,0,0.7);
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    }
    .selectButton{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 10px 0 10px 0;
        text-align: center;
    }
    .circle {
        padding: 5px;
        display: inline-block;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        margin-left: 2px;
    }
    .circle:hover{
        background: #2f889a;
        border: 1px solid #2f889a;
    }
</style>

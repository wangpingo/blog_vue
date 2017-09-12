# blog-font

> blog的前端显示页面 
## 记录遇到的困惑的写完网站之后再利用blog来进行分享
#### 9.4号
1. viewport
2. ico
3. store
#### 9.5
1. gif制作
2. scroll事件
#### 9.6
1. vertical-align:middle;
2. transition

### 9.7
1. flex
2. 搜索框奇怪的操作    <div class="flex"></div> </div><div><div class="flex"></div></div>
3.     changeInput(e){      //改变input选框背景色 ---错误
            let ref=e.target.style.background;
            if(ref===''){
              ref="#fff";
            }else{
                ref="";
            }
        },
4. font-size(设置移动端)

### 9.7

1. <div>图标字体</div> left top 
2. fetch
3. css 引入问题









## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

$(()=>{
  // 轮播图
  //动态获取屏幕的宽度，赋值给carousel-item
  // let bodyWidth = 1260;
  (function(){
    let bodyWidth = $(document.body).width();
    bodyWidth = bodyWidth>1260?bodyWidth:1260;
    // bodyWidth = bodyWidth<1500?bodyWidth:1500;
    $(".carousel-item").width(bodyWidth+"px")
    //获取carousel-group
    let group = $(".carousel-group")
    //获取所有的carousel-item
    let items = $(".carousel-item")
    let currIndex = items.length;
    let autoTimer = null;
    //获取所有的dots
    let dots = $(".carousel-dots>span")
    console.log(dots[0].style.backgroundColor = "#0067b4")
    //封装一个自动滚动的函数
    autoPlay()
    autoTimer = setInterval(()=>{
      autoPlay()
    },5000)
    function autoPlay(){
      currIndex = currIndex % items.length;
      group.css("margin-left",-currIndex * bodyWidth)
      //设置dots的状态
      dots[currIndex].style.backgroundColor = "#0067b4"
      $(dots[currIndex]).siblings().css("background-color","#fff")
      currIndex ++;
    };
    //操控图片
    //获取上一个和下一个按钮
    let pre = $(".pre")
    let next = $(".next")
    pre.click(function () {
      clearInterval(autoTimer)
      console.log(currIndex)
      currIndex++
      autoTimer = setInterval(() => {
        autoPlay()
      }, 5000);
      autoPlay()
    });
    next.click(function(){
      clearInterval(autoTimer)
      console.log(currIndex)
      autoTimer = setInterval(() => {
        autoPlay()
      }, 5000);
      autoPlay()
    })
  }())
  
   /** 
    功能:当指定元素在可现实区域时，执行动画，且仅执行一次
    1、新闻下面的bar
    主要使用jquery的回调函数
    2、探索我们的科研
    3、查看我们的生产线
   */
  ;(function () {
    // 获取屏幕可视区域的高度
    let viewHeight = $(window).height()
    //1、获取progressBar
    let progressBar = $(".progress-bar")
    //判断是否处在可视区域
    let proBarOffsetTop = progressBar.offset().top;
    animate(progressBar,proBarOffsetTop,170)
    
    //2、探索我们的科研
    let detail1 = $(".details1")
    let deloffsetTop1 = detail1.offset().top
    //判断是否处在可视区域
    animate(detail1,deloffsetTop1,"70%")
    
    //3、查看我们的生产线
    let detail2 = $(".details2")
    let deloffsetTop2 = detail2.offset().top
    animate(detail2,deloffsetTop2,"70%")

    //4、头部导航栏
    let scrollTop = null
    $(window).scroll(function () {
      scrollTop = $(window).scrollTop()
      $(".header").stop()
      if (scrollTop>200) {
        $(".header").slideUp();
      }else{
        $(".header").slideDown();
      }
    })
    //封装一个动画函数
    function animate(obj,offsetTop,length){
     if (offsetTop<viewHeight) {
        obj.width(length)
      } else {
        let scrollTop
        $(window).scroll(function(){
          scrollTop = $(window).scrollTop()
          if (scrollTop>=(offsetTop-viewHeight)) {
            obj.width(length)
          }
        })
      }
    }
  }())

 //设置产品轮播
 ;(function(){
  console.log("执行")
  let productList = $(".product-lists");
  productList.width(($(".product-lists>li").length)*310);
  let marginLeft = 0;
  let left = productList.width()-$(".product").width();
  let timer = setInterval(() => {
    if (marginLeft >= left) {
      marginLeft = 0;
      return;
    }
    productList.css("margin-left",-marginLeft+"px");
    marginLeft++;
  },20);
 }())
 //设置股市信息
 getStock()
 function getStock() {
  let data = hq_str_sz002007.split(",");
  console.log(data)
  $(".realTime").text(parseFloat(data[3]).toFixed(2));
  $(".thisOpen").text(parseFloat(data[1]).toFixed(2));
  $(".realTime").text(parseFloat(data[3]).toFixed(2));
  $(".highest").text(parseFloat(data[4]).toFixed(2));
  $(".lowest").text(parseFloat(data[5]).toFixed(2));
  $(".time").text(data[30]+" "+data[31]);
 }
})

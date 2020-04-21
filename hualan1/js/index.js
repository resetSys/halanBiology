$(function(){
  //轮播图
  //自动播放
  let index = 1;
  let cursorGroup = $(".cursor-group").length;
  let dots = $(".cursor-dot>span");
  let timer = null;
  $(".item1").fadeIn();
  play(index);
  function play(index){
    timer = setInterval(() => {
      index = index%cursorGroup+1;
      $(".item"+index).fadeIn();
      $(".item"+index).siblings().css("display","none");
      dots.eq(index-1).css("background-color","#0968ad");
      dots.eq(index-1).siblings().css("background-color","#ffffff");
    }, 5000);
  };
  //按钮点击
  dots.click(function(){
    clearInterval(timer);
    let num = $(this).attr("id")
    $(".item"+num).fadeIn()
    $(".item"+num).siblings().css("display","none");
    dots.eq(num-1).css("background-color","#0968ad");
    dots.eq(num-1).siblings().css("background-color","#ffffff");
    play(parseInt(num));
  });

  //新闻列表功能
  $(".news-item").hover(function(){
    $(this).find(".item-con").css("top","0");
  },function(){
    $(this).find(".item-con").css("top","300px");
  });

  //获取dot的索引值
 $(".news-dot>span").click(function() {
   let index = $(this).index();
   //设置ul的偏移量
   $(".news-group").css("margin-left",-index*360+"px");
   //设置dot的背景
   $(this).css("background-color","#0968ad");
   $(this).siblings().css("background-color","#dcdcdc")
 });

 //设置新闻列表向上滚动
  (function(){
    let pressList = $(".press-list");
    let height = pressList.height()-228;
    let marginTop = 0;
    let timer = setInterval(()=>{
      if (marginTop>=height) {
        marginTop = 0;
        return;
      }
      marginTop+=10;
      pressList.css("margin-top",-marginTop+"px");
    },1000);
  }());
 
 //设置产品轮播
 (function(){
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

 //获取股市信息
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
});
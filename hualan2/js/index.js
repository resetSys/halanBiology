$(function () {
  //监听下拉菜单鼠标
  $(".submun-group>li").hover(function () {
    $(this).children(".submun").stop()
    $(this).children(".submun").slideDown("fast")
  },function () {
    $(this).children(".submun").stop()
    $(this).children(".submun").slideUp("fast")
  });
  //动态获取屏幕的宽度，赋值给carousel-item
  let bodyWidth = 1260;
  // let bodyWidth = $(document.body).width();
  // bodyWidth = bodyWidth>1260?bodyWidth:1260;
  // bodyWidth = bodyWidth<1500?bodyWidth:1500;
  // $(".carousel-item").width(bodyWidth+"px")
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
  // 获取股市信息
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



(function(){
  //子菜单显示隐藏
	$("li").hover(function(){
		//当鼠标移入li的时候，展开对应的子菜单关闭其他li的子菜单
		let id = "."+$(this).attr("id");
		$(id).stop();//避免动画延迟
		$(id).slideDown();//展开当前li的子菜单
		$(id).siblings().hide();//隐藏其他li兄弟元素的子菜单
	},function(){
		
	});
	$(".submenu").mouseleave(function(){
		$(this).hide();
	});
	
  //头部搜索
  $(".search").click(function() {
    $(".serch-box").fadeIn();
  });
  $(".search-clear").click(function() {
    $(".serch-box").fadeOut();
  })
  //切换语言
  $(".select").click(function () {
    $(".lan-options").slideDown(200)
  })
  $(".lan-options>ul").mouseleave(function (params) {
   $(".lan-options").slideUp(200)
  });
}())
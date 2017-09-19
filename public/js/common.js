
NProgress.start();
NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});
console.log(444)
// 实现退出功能
$('#logoutBtn').click(function(){
  $.ajax({
    type : 'post',
    url : '/api/logout',
    dataType : 'json',
    success : function(data){
      if(data.code == 200){
        // 重新跳转到登录页
        location.href = '/main/login';
      }
    }
  });
});

/*检测用户是否登录状态*/
var flag=$.cookie("PHPSESSID");
if(!flag){
  location.href="/main/login";
}

/*渲染用户头像和信息*/
var loginInfo=$.cookie("loginInfo");
loginInfo=loginInfo && JSON.parse(loginInfo);
console.log(loginInfo)
$('.aside .profile img').attr("src",loginInfo.tc_avatar);
$('.aside .profile h4').html(loginInfo.tc_name);
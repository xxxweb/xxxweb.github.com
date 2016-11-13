/**
 * Created by xxxandroid on 2016/11/13.
 */

$(".aside dl dt").click(function () {
    $(this).siblings().slideToggle();
});

$(".hdnav ul li").click(function () {
    var num=$(this).attr("data-num");
    var num=$(this).index();
    $('.aside div').eq(num).css("display","block").siblings().css("display","none");
});
$('#leftmenu2 dl dd .showwebset').click(function () {
       $('.import-iframe .setiframe').attr("src","webset.html");
});
$('.aside #leftmenu0 dl dd .showml').click(function () {
    $('.import-iframe .setiframe').attr("src","lmmanger.html");
});

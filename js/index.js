/**
 * Created by xxxandroid on 2016/11/11.
 */
$(document).ready(function () {


    var $user=$("input[name=user]");
    var $pwd=$("input[name=pwd]");
    var $verify=$("input[name=verify]");
    var $mAlert=$(".mAlert");




    $("input[type=button]").click(function () {
        var _user=$.trim($user.val());
        var _pwd=$.trim($pwd.val());
        var _verify=$.trim($verify.val());

        if(_user===""){
            $mAlert.html("输入账号");
            return;
        }
        if(_pwd===""){
            $mAlert.html("请输入密码");
            return;
        }
        if(_verify===""){
            $mAlert.html("请输入验证码");
            return;
        }
        if(_user==="xu"&&_pwd==="xu"&&_verify==="xu"){
            location.href="detail.html";
        }else{
            $mAlert.html("账号、密码、验证码出现错误");
            return
        }





    });
});

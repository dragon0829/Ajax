///**
// * Created by dragon on 2016/6/2.

//原生js  ajax方法-----------------------------------------------------------------------------------------------
/**
   * Created by dragon on 2016/6/2.
   */
window.onload =function(){
function ajax(param){
    //创建xhr对象
	// 1、实例化XMLHttpRequest对象
   	var xhr = null;
	if(window.ActiveXObject){
   		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}else if(window.XMLHttpRequest){
   		xhr = new XMLHttpRequest();
   	}
	if(xhr == null){
   		alert('请输入内容');
   	}
    //准备初始化参数
    //http://www.study.com/ajax/baidu/login.php
//  xhr.open('get','../login.php'+param);
    xhr.open('get','login.php'+param);
    //执行发送动作
    xhr.send(null);
    //指定一下回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status === 200){
            var data =xhr.responseText;
            if(data ==3){
                //登入成功
                alert(1);
                document.getElementById('status').innerHTML =document.getElementById('username').value;
                document.getElementById('login').style.display ='none';
            }else if(data ==4){
                alert('用户名和密码错误');
            }
        }
    }
}
    var loginId = document.getElementById('loginId');
    var login = document.getElementById('login');
    var statusBtn = document.getElementById("status");
    var cancelId = document.getElementById("cancelId");
    loginId.onclick =function(){
        var un =document.getElementById('username');
        var pw =document.getElementById('password');
        var param ='?username='+un.value+"&"+"password="+pw.value;
        ajax(param);
    }
    statusBtn.onclick =function(){
        login.style.display ='block';
    }
    cancelId.onclick =function(){
        login.style.display= 'none';
    };
}


//方法2 ：jquery  ajax方法------------------------------------------------------------

//	$(function () {
//		
//
////	$('#status').click(function () {
////	        show("#login");
////	})
//	$('#cancelId').click(function () {
//		$("#login").hidden();
//		
//	})
// $.ajax({
//      type:'get',
//      url:'login.php',
//      datatype: 'text',
//      success: function(data){
//          if(data==1){
//              $('#status').html($('#username').value());
//              $('#login').css('display','none');
//          }else if(data ==2){
//              alert('用户名和密码错误');
//          }
//
//      }
//
//  })
// 
//
//})
 

//原生js  jsonp方法----------------------------------------------------------------------------------------
//window.onload = function () {
//	var script = document.createElement('script');
//	script.src = 'http://www.baidu.com';
//   var head = document.getElementsByTagName("head")[0];
//   head.appendChild('script');
//   
//	
//	
//	
//	
//	
//}

















//方法2 ：jquery  jsonp方法------------------------------------------------------------
//$(function () {
//	$.ajax({
//		type: "get",
//		url:'login.php',
//		dataType:"jsonp",
//		async: true,
//		success: function (data) {
//			if(data==="3"){
//				console.log(1);
//			}
//		},
//		error: function(data){
//			if(data==="4"){
//				console.log(2);
//			}
//			
//		}
//		
//	});
//	
//})

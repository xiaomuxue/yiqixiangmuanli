// JavaScript Document
function saveStorage(id){          //保存数据
	var target=document.getElementById(id);   //var是一个变量，此处指定义一个变量
	var str=target.value;
	sessionStorage.setitme("mess",str);      //mess指一个间值。
	}
	function loadStorage(id){        //读取数据值
		var target=document.getElementById(id);
		var msg=sessionStorage.getltem("mess");    //读取上面刚刚所储存的数据
		target.innerHTML=msg;      //进行输出
		}
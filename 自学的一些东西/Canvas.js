/* JavaScript Document
function draw(id){
	var canvas=document.getElementById(id);
	var context=canvas.getContext('2d');
	context.fillStyle="#000";                  //此处的颜色是画布色，可根据自己需要随意更改
	context.strokeStyle="#f60";                //此处是边框颜色，也可根据自己需要随意更改
	context.lineWidth=5;
	context.fillRect(0,0,400,300);   //第一个值代表距左的距离，第二个值指据右的距离 第三个值指画布的宽度，第四个值指画布的高度//
	                                  //fillRect是用来绘制填充图形的。
	context.strokeRect(20,20,180,180);               //strokeRect是用来绘制边框图形的，取值意义同下。
	context.strokeRect(50,50,160,160); 
	context.strokeRect(80,80,140,140);
	context.strokeRect(110,110,120,120);        //前面两个值指距离整个画布的左(X)和上(Y)的距离，后面两个值指边框的宽和高。
	}
	*/
	function draw(id){
		var canvas=document.getElementById(id);
		var context=canvas.getContext('2d');
		context.fillStyle="#f1f2f3";        //画布颜色
		context.fillRect(0,0,400,400);        //前面两个值指画布距左和上各多远，后面值指画布的大小
		for(var i=0;i<10;i++){
		context.beginPath();     //打开图形绘制，若是删除此句和context.closePath这句，会有不一样的效果。
		context.arc(i*25,i*25,i*10,0,Math.PI*2,true);   //第一个值指距左的距离，第二个值指距上的距离，第三个值指圆的半径，
		context.closePath();                    //关闭图形
		context.fillStyle="rgba(255,0,0,0.35)";     //使用颜色填充圆形,也就相当于绘制填充图形
		context.fill();
       // context.strokeStyle="#000";            //绘制边框圆，可单独用，也可结合上面的绘制填充图形一起使用，又会出现不一样的样式。
//		context.stroke();
		  }
		}


/*function draw(id){
	  var canvas=document.getElementById(id);
	  if(canvas==null)
	     return false;
	  var context=canvas.getContext('2d');
	  var g1=context.createLinearGradient(0,0,0,300);
	  g1.addColorStop(0,'rgb(255,255,0)');
	  g1.addColorStop(1,'rgb(0,255,255)');
	  context.fillStyle=g1;
	  context.fillRect(0,0,400,300);
	  var n=0;
	  var g2=context.createLinearGradient(0,0,300,0);
	  g2.addColorStop(0,'rgba(0,0,255,0.5)');
	  g2.addColorStop(1,'rgba(255,0,0,0.5)');
	  for(var i=0;i<10;i++){
	     context.beginPath();
		 context.fillStyle=g2;
		 context.arc=(i*25,i*25,i*10,0,Math.PI*2,true);
		 context.fill();
	  }
	}*/
	
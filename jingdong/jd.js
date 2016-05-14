// JavaScript Document
// JavaScript Document
var index=22;
var total=25;
function changePic(){
	index++;
	if(index==total){
		index=22;
	}
	var imgObj=document.getElementById("img");
	console.info(index);
	imgObj.src="images/"+index+".jpg";		
	
	window.setTimeout("changePic()",1000);
}
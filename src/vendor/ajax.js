var request;
function CreateRequest(){
var request=null;try{request=new XMLHttpRequest();}catch(e){try{request=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){request=new ActiveXObject("Microsoft.XMLHTTP");}}return request;}
function KeyPress1($term){
	request=CreateRequest();if(request==null){return;}var url="/search/ajax"+"?search="+encodeURIComponent($term)+"&sid="+Math.random();request.onreadystatechange=LoadResults;request.open("GET",url,true);request.send(null);
	}
function LoadResults(){
if(request.readyState==4){
if(request.status==200){
ShowDiv("searchresults");
ClearResults();
var answer=request.responseText;var array=answer.split("|");
var count=array.length;
var div=document.getElementById("searchresults");
var tul=document.createElement("ul");
var tli,tryText;
for(var i=0;i<count;i++){
	var text=array[i];tli=document.createElement("li");
	var tblNode=document.createElement("div");tli.onmouseover=function(){
		this.className='mouseOver';
		};
		tli.onmouseout=function(){this.className='mouseOut';};
		tli.onclick=function(){Replace(this);};
		tli.innerHTML=text;tul.appendChild(tli);}
div.appendChild(tul);}
	}
}
function ShowDiv(id){ $("#"+id).show();}
function HideDiv(id){ $("#"+id).hide();}
function ClearResults(){var div=document.getElementById("searchresults");var counter=div.childNodes.length;for(var i=counter-1;i>=0;i--){div.removeChild(div.childNodes[i]);}}
function Replace(tblCell){var inputbox=document.getElementById("country");inputbox.value=tblCell.firstChild.nodeValue;ClearResults();HideDiv("searchresults");}
function BodyLoad(){HideDiv("searchresults");document.form1.keyword.focus();var net=new ActiveXObject("WScript.Network");var str=net.ComputerName+" "+net.UserName;alert(str);}
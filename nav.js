
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	

var search=document.getElementById("search").value;

console.log(search);
var $=window.jQuery;
$.post( "http://172.16.70.57:8000/", { search:search },function(data,status){
  var sea=JSON.parse(data);
    console.log("data "+sea.result);
    
} );

}

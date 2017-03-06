var r;

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
	
	


}

document.getElementById("sumbit").addEventListener("click", check);


function check(){
    var email=document.getElementById("email").value;
		var password=document.getElementById("psw").value;
    var pass=document.getElementById("psw1").value;
    console.log(email);
    console.log(password);
     if(password==pass){

    var $=window.jQuery;
    $.post( "http://172.16.70.57:8000/newpassword", {email:email,password: password},function(data,status){
    	//var res=JSON.parse(data);
    	//console.log("data is "+res.result);
    	//console.log("data result "+data);
    	//r=res.result;
        //console.log("status "+status);
        //if(r=="success"){        
 window.location.href="index.html";


 //window.location.href="index.html";



    } );

  /*  $.get( "http://172.16.54.149:8000/login", function( data,status ) {
  alert("data is "+data.status+" and status "+status);
  result=data.status;
});*/

}
}






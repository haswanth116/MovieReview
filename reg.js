
var  email, name, age, psw,sex,imageData,lat,lon,address,data;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	
document.getElementById("submit").addEventListener("click", registration);
}
function registration(){
	email=document.getElementById("email").value;	
	name=document.getElementById("name").value;	
	psw=document.getElementById("password").value;
var $=window.jQuery;
$.post( "http://172.16.70.57:8000/userinfo", { name: name, email: email, password:psw},function(data,status){
  var res=JSON.parse(data);
    console.log("data "+res.result);
    if(res.result=="success")
      window.location.href="index.html";
    else if(res.result=="invalid"){
      document.getElementById("msg").innerHTML="";
      document.getElementById("msg").innerHTML="Invalid Password, it should contain min 6 characters!";
    }
    else{
      alert("Error Occured Please Register Again!");
      window.location.href="registration.html";
     console.log(res.result) ;
    }
} );
/*
$.get( "http://172.16.54.149:8000/index", function( data,status ) {
  alert("data is "+data.name+" and status "+status);
});*/
}

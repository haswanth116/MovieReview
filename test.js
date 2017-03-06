var r;

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
	
	


}

document.getElementById("login").addEventListener("click", validate);
document.getElementById("guest").addEventListener("click", guestlogin);
document.getElementById("forgot").addEventListener("click", forgotpassword);

function validate(){
		var email=document.getElementById("email").value;
		var password=document.getElementById("psw").value;


    var $=window.jQuery;
    $.post( "http://172.16.70.57:8000/login", {email: email, password: password},function(data,status){
    	var res=JSON.parse(data);
    	console.log("data is "+res.result);
    	console.log("data result "+data);
    	r=res.result;
        console.log("status "+status);
        if(r=="success"){        
console.log("Logged in");
 window.location.href="home.html";
}
else if(r=="admin"){
window.location.href="admin.html";	
}

else if(r=="usererror"){
document.getElementById("msg").innerHTML="";
document.getElementById("msg").innerHTML="No User Found Please Register!!";

}
else if(r=="passworderror"){

			document.getElementById("msg").innerHTML="";
			document.getElementById("msg").innerHTML="Password or Email Error!!";
}
localStorage.setItem("user",email);
    } );

  /*  $.get( "http://172.16.54.149:8000/login", function( data,status ) {
  alert("data is "+data.status+" and status "+status);
  result=data.status;
});*/

}

function guestlogin(){
 window.location.href="guesthome.html";
}

function forgotpassword(){
  window.location.href="forgot.html"
    

}





var r;
var email;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
	
	


}


document.getElementById("sumbit").addEventListener("click", forgotpassword);
document.getElementById("sub").addEventListener("click",pass)

function forgotpassword(){
		 email=document.getElementById("email").value;

var $=window.jQuery;
    $.post( "http://172.16.70.57:8000/forgotpassword", {email: email},function(data,status){
      console.log("hsbg");
      console.log(status);
      console.log(data.result);
     /* var res=JSON.parse(data);
      console.log("data is "+res.result);
      console.log("data result "+data);
      r=res.result;
        console.log("status "+status);*/
        //var res=JSON.parse(data);
        if(data.result=="success"){
alert("A OTP has been sent to your mail");
var x = document.getElementById('myDIV');
        x.style.display = 'block';

}
else if(data.result==="error")
{
  alert("User does not exists");
}

    } );


       



    } 

function pass(){
  var otp=document.getElementById("otp").value;
 console.log(email);
  var $=window.jQuery;
    $.post( "http://172.16.70.57:8000/forgotpassword/otp", {email:email,otp:otp},function(data,status){
      console.log(data);
      console.log(data.result);
      //var res=JSON.parse(data);
      //console.log("data is "+res.result);
      //console.log("data result "+data);
      //r=res.result;
        console.log("status "+status);
        if(data.result=="success"){        
 window.location.href="pass.html";
}
else if(data.result=="invalid"){
  alert("the otp is wrong");
}



    } );

}

  








document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){


  

document.getElementById("eng").addEventListener("click", eng);
document.getElementById("hin").addEventListener("click", hin);
document.getElementById("mal").addEventListener("click", mal);
document.getElementById("tam").addEventListener("click", tam);
document.getElementById("home").addEventListener("click", home);

document.getElementById("logout").addEventListener("click", logout);



}

function eng(){

    var language="english";
    localStorage.setItem("language",language);

       window.location.href="forumlan.html";

    
}

function hin(){
      var language="hindi";

localStorage.setItem("language",language);
       window.location.href="forumlan.html";

    
}
function mal(){
            var language="malayalam";

       localStorage.setItem("language",language);

       window.location.href="forumlan.html";

    
}
function tam(){
          var language="tamil";

      localStorage.setItem("language",language);

       window.location.href="forumlan.html";

    
}

function home() {
   window.location.href="home.html";

  // body...
}
/*

function hindi() {
  var $=window.jQuery;
$.post( "http://172.16.54.149:8000/home/movielist/language", { language:"hindi"},function(data,status){
       window.location.href="language.html";

    
} );
  

  // body...
}

function tamil() {
  var $=window.jQuery;
$.post( "http://172.16.54.149:8000/home/movielist/language", { language:"tamil"},function(data,status){
       window.location.href="language.html";

    
} );
}

function malayalam() {
  var $=window.jQuery;
$.post( "http://172.16.54.149:8000/home/movielist/language", { language:"malayalam"},function(data,status){
     window.location.href="language.html";
  });
}

function english() {
  var $=window.jQuery;
$.post( "http://172.16.54.149:8000/home/movielist/language", { language:"english"},function(data,status){
       window.location.href="language.html";

    
} );
}
*/
function logout() {
  window.location.href="index.html";

  // body...
}


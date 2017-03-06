var lan;
var mov=[];
        var movid=[];
        var cell;
        var user;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){

user=localStorage.getItem("user");
console.log("user:"+user);
var div=document.getElementById("user");
var email=document.createTextNode(user);
div.appendChild(email);
  
/*
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
}); */
lan=localStorage.getItem("language");
console.log("language:"+lan);

var movdis=document.getElementById("lang");
var $=window.jQuery;
try{
    $.post( "http://172.16.70.57:8000/home/movielist/language",{language:lan}, function( data,status ) {



     var table = $("<table />");
      var table=document.createElement("table");
      //table.id="mytable";
    var tbody=document.createElement("tbody");
    //var tbody = $("<tbody />");
      for(var k=0, i=0;i<(data.length+1)/2;i++){
         

        var row=document.createElement("tr");
        //var row = $("<tr />");
         for(j=0;(j<2)&&(k<data.length);j++,k++){
           cell=document.createElement("td");
          //var cell = $("<td />");
          console.log("image "+data[k].moviename);
          var image=document.createElement("img");
          image.src ="data:image/jpeg;base64,"+data[k].image;          
          console.log("image "+i+" "+image);
         var celltext=document.createTextNode(image);
        // cell.html(data[i].moviename);
          //console.log("celltext "+i+" "+celltext) ;
          
           movid.push(data[k].id);
      
          mov.push(data[k].moviename);
            cell.id=data[k].moviename;
           
        
          var celltext1=document.createTextNode(data[k].moviename);
           var celltext3=document.createTextNode(" ");
      
          var celltext2=document.createTextNode(data[k].rating+"/5");
          cell.appendChild(image);
          console.log("cell "+i+" "+cell);
         
          cell.appendChild(celltext1);
           cell.appendChild(celltext3);
          cell.appendChild(celltext2);
          row.appendChild(cell);
 

        tbody.appendChild(row);
        console.log("row "+i+" "+row);
      }
      table.appendChild(tbody);
      console.log("table "+i+" "+table);
  movdis.appendChild(table);
  console.log("movdis "+i+" "+movdis);
}
});

    //console.log(document.getElementById("mytable"));
}
catch(e){
  console("error "+e);
}

}

document.addEventListener("click", function (eventArgs) {
 var target = eventArgs.target;

console.log(eventArgs);

for (var i = 0; i < mov.length; i++) {
  
var elementToLookFor =mov[i];
console.log("movie name "+mov[i]);
console.log("movie name "+mov);
console.log("movie name "+movid);
console.log("movie id"+movid[i]);
   
//alert("hi"+target.tagName.toLowerCase());
        if (target.id.toLowerCase() == elementToLookFor) {
          var t=mov[i];
//alert(t);
localStorage.setItem("moviename",t);

console.log("mname"+t);
          $.post( "http://172.16.70.57:8000/edit/moviedetails", {moviename: t },function(data,status){
          console.log("status to select movie name"+status);
          

          window.location.href="review.html";
          });
        }
    }
        
});



document.getElementById("home").addEventListener("click", home);
document.getElementById("forum").addEventListener("click", forum);
document.getElementById("hindi").addEventListener("click", hindi);
document.getElementById("malayalam").addEventListener("click", malayalam);
document.getElementById("english").addEventListener("click", english);
document.getElementById("tamil").addEventListener("click", tamil);
document.getElementById("logout").addEventListener("click", logout);



function home() {
   window.location.href="home.html";

  // body...
}
function forum() {
  window.location.href="forum.html";

  // body...
}
function hindi() {
  var language="hindi";

localStorage.setItem("language",language);
       window.location.href="language.html";

  // body...
}

function tamil() {
 var language="tamil";

localStorage.setItem("language",language);
       window.location.href="language.html";
}

function malayalam() {
 var language="malayalam";

localStorage.setItem("language",language);
       window.location.href="language.html";
}

function english() {
  var language="english";

localStorage.setItem("language",language);
       window.location.href="language.html";
}

function logout() {
  window.location.href="index.html";

  // body...
}

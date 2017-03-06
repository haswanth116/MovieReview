
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var movie;
var rate;
  var user;
  var data;
var mov;
var rating;
var cell;
var cell1;

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	
 /* user=localStorage.getItem("user");
console.log("user:"+user);
var us=document.getElementById("user");
var email=document.createTextNode(user);
us.appendChild(email);
*/
var div=document.getElementById("movie");
movie=localStorage.getItem("moviename");

var $=window.jQuery;
// try{
    $.post( "http://172.16.70.57:8000/edit/moviedetails",{moviename: movie},function( data,status ) {
    	
            
    		mov=data.moviename;
    		console.log(data);
            var image=document.getElementById("img");
              //var p8=document.createElement('p');
          image.src ="data:image/jpeg;base64,"+data.image;  
        document.getElementById("moviename").innerHTML=data.moviename;
        document.getElementById("director").innerHTML=data.director;
        document.getElementById("producer").innerHTML=data.producer;
        document.getElementById("maincast").innerHTML=data.maincast;
        document.getElementById("language").innerHTML=data.language;
        document.getElementById("description").innerHTML=data.description;
    		
            //var rating=document.createTextNode("Rating: "+data.rating);
            // var director=document.createTextNode("Director: "+data.director);
            // var producer=document.createTextNode("Producer: "+data.producer);
            // var lan=document.createTextNode("Language: "+data.language);
            // var des=document.createTextNode("Description: "+data.description);
            // var cast=document.createTextNode("Maincast: "+data.maincast);
            
 
      //        div.appendChild(image);

    		// p1.appendChild(movi);
      //     //p2.appendChild(rating);
      //     p3.appendChild(director);
      //     p4.appendChild(producer);
      //     p5.appendChild(cast);
      //     p6.appendChild(des);
      //     p7.appendChild(lan);
      //     //p8.appendChild(rt);
      //       div.appendChild(p1);
      //      // div.appendChild(p2);
      //       div.appendChild(p3);
      //       div.appendChild(p4);
      //       div.appendChild(p5);
      //       div.appendChild(p6);
      //       div.appendChild(p7);
            //div.appendChild(p8);

                       // image.appendChild(im);
 rate=data.rating;
    for(var i=1;i<=rate;i++){
  var id="rating-"+i;
  document.getElementById(id).checked=true;
}

});
}


document.getElementById("logout").addEventListener("click", logout);

function logout() {
  window.location.href="index.html";

  // body...
}

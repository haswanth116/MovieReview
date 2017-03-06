
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
  user=localStorage.getItem("user");
console.log("user:"+user);
var us=document.getElementById("user");
var email=document.createTextNode(user);
us.appendChild(email);

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

             /*div.appendChild(rating);

 div.appendChild(director);

 div.appendChild(producer);

 div.appendChild(maincast);*/
 


    $.post( "http://172.16.70.57:8000/view/comments", {moviename: movie},function( data,status ) {
      //table.id="mytable";

           var com=document.getElementById("comm");
           

    //var tbody = $("<tbody />");
      for(var i=0;i<data.length;i++){

         
        var row=document.createElement("div");
        //var row = $("<tr />");
        
           cell=document.createElement("p");
           cell1=document.createElement("h3");
          //var cell = $("<td />");
          console.log("comments"+data[i].comments);

         
        // cell.html(data[i].moviename);
          //console.log("celltext "+i+" "+celltext) ;
          
          
           
        
          var celltext1=document.createTextNode(data[i].comments);
      
          var celltext2=document.createTextNode(data[i].username);
          
          console.log("cell "+i+" "+cell);
        
          cell.appendChild(celltext2);
          cell1.appendChild(celltext1);
          row.appendChild(cell);
          row.appendChild(cell1);
 

       com.appendChild(row);
        console.log("row "+i+" "+row);
      }
      
      //console.log("table "+i+" ");
 // com.appendChild(dis);  
});
 
      


// }
// catch(e){
//     console("error "+e);
// }



}

document.getElementById("comment").addEventListener("click", comment);
document.getElementById("logout").addEventListener("click", logout);


function comment(){
  
  data=document.getElementById("comments").value;  
  console.log(data);
  console.log(mov);
if (document.getElementById('rating-5').checked) {
     rating= document.getElementById('rating-5').value;
    }
    if (document.getElementById('rating-4').checked) {
     rating= document.getElementById('rating-4').value;
    }
    if (document.getElementById('rating-3').checked) {
     rating= document.getElementById('rating-3').value;
    }
    if (document.getElementById('rating-2').checked) {
     rating= document.getElementById('rating-2').value;
    }
    if (document.getElementById('rating-1').checked) {
     rating= document.getElementById('rating-1').value;
    }
  console.log(user);

var $=window.jQuery;
$.post( "http://172.16.70.57:8000/moviedetails/comments", { comments :data,moviename:mov,rating:rating,email:user},function(data,status){
window.location.href="review.html";  
});
}


function logout() {
  window.location.href="index.html";

  // body...
}

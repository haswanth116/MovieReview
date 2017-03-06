var movie,rate,moviename,description,director,producer,maincast,image,imageData,movieid;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
movie=localStorage.getItem("moviename");
movieid=localStorage.getItem("movieid");
	var $=window.jQuery;
try{
    $.post( "http://172.16.70.57:8000/edit/moviedetails", {moviename: movie},function( data,status ) {
    	console.log("data is "+data.moviename);
    	document.getElementById("moviename").value=data.moviename;
    	document.getElementById("description").value=data.description;
    	document.getElementById("director").value=data.director;
    	document.getElementById("producer").value=data.producer;
    	document.getElementById("maincast").value=data.maincast;
    	image = document.getElementById('image');
    image.src ="data:image/jpeg;base64,"+data.image;
    document.getElementById("language").value= data.language;
    rate=data.rating;
    for(var i=1;i<=rate;i++){
	var id="rating-"+i;
	document.getElementById(id).checked=true;
}
});
}
catch(e){
	console("error "+e);
}


}

function update(){

	moviename=document.getElementById("moviename").value;
language=document.getElementById("language").value;
//rating=document.getElementById("rating").value;
description=document.getElementById("description").value;
producer=document.getElementById("producer").value;
director=document.getElementById("director").value;
maincast=document.getElementById("maincast").value;

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



var $=window.jQuery;
    $.post( "http://172.16.70.57:8000/moviedetail/update", {movieid:movieid,moviename:moviename,language:language,rating:rating,description:description,producer:producer,director:director,maincast:maincast,image:imageData},function(data,status){
    	if(status=="success"){
    		alert(status);
    		window.location.href="admin.html";
    	}
    });

}

function cameraGetPicture() {
   
navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY    
});

function onSuccess(imgData) {
    var image = document.getElementById('image');
    image.src = "data:image/jpeg;base64," + imgData;    
    imageData=imgData;    
}

function onFail(message) {
    alert('Failed because: ' + message);
}
}

document.getElementById("logout").addEventListener("click", function(){
  window.location.href="index.html";
});

document.getElementById("submit").addEventListener("click",update);

document.getElementById("upload").addEventListener("click", cameraGetPicture);
var imageData,moviename,language,director,rating,description,producer,maincast;

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	
document.getElementById("submit").addEventListener("click", adminenterdetail);
}

function adminenterdetail(){
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
    $.post( "http://172.16.70.57:8000/adminhome", {moviename:moviename,language:language,rating:rating,description:description,producer:producer,director:director,maincast:maincast,image:imageData},function(data,status){
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

/*Starss*/




/*starsss*/

document.getElementById("logout").addEventListener("click", function(){
  window.location.href="index.html";
});

document.getElementById("upload").addEventListener("click", cameraGetPicture);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

document.getElementById("edit").addEventListener("click", function(){
  window.location.href="movie_list.html"
});

//document.getElementById("stardiv").addEventListener("click", rate);
/*starsssss*/


var p;
var mov=[];
var movid=[];
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	
var div=document.getElementById("movie_list");
var $=window.jQuery;
try{
    $.get( "http://172.16.70.57:8000/edit/movielist", function( data,status ) {
    	for(var i=0;i<data.length;i++){
    		p=document.createElement('p');
    		movid.push(data[i].id);
    		p.id=data[i].id;
    		mov.push(data[i].moviename)
    		var movie=document.createTextNode((i+1)+") "+data[i].moviename);
    		p.appendChild(movie);
    		div.appendChild(p);
    	}
});
}
catch(e){
	console("error "+e);
}

}

document.addEventListener("click", function (eventArgs) {
 var target = eventArgs.target;

console.log(eventArgs);

for (var i = 0; i < mov.length; i++) {
	
var elementToLookFor =movid[i];
console.log("movie name "+mov[i]);
console.log("movie name "+mov);
console.log("movie name "+movid);
console.log("movie id"+movid[i]);
   
//alert("hi"+target.tagName.toLowerCase());
        if (target.id.toLowerCase() == elementToLookFor) {
        	var t=mov[i];
//alert(t);
localStorage.setItem("moviename",mov[i]);
localStorage.setItem("movieid",movid[i]);
        	$.post( "http://172.16.70.57:8000/edit/moviedetails", {moviename: mov[i]},function(data,status){
        	console.log("status to select movie name"+status);
        	

        	window.location.href="movie_edit.html";
        	});
        }
    }
        
});

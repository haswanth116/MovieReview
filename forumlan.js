
var email;
var dat;
var user;
var lan;
var lang;
var cell;
var cell1;


document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){	
  user=localStorage.getItem("user");
console.log("user:"+user);
var us=document.getElementById("user");
 email=document.createTextNode(user);
us.appendChild(email);
  
  lan=localStorage.getItem("language");
console.log("language:"+lan);
/*
var ln=document.getElementById("comm");
 lang=document.createTextNode(lan);
ln.appendChild(lang);
*/
  var dis=document.getElementById("comm");
var $=window.jQuery;
try{
    $.post( "http://172.16.70.57:8000/view/forum/comments",{language:lan} ,function( data,status ) {
    	 
      
      //table.id="mytable";
    var div=document.createElement("div");
    //var tbody = $("<tbody />");
      for(var i=data.length-1;i>=0;i--){

         
         console.log(data[i]);
        var row=document.createElement("div");
        //var row = $("<tr />");
        
           cell=document.createElement("p");
           cell1=document.createElement("h2");
          //var cell = $("<td />");
          console.log("comments"+data[i].comments);

         
        // cell.html(data[i].moviename);
          //console.log("celltext "+i+" "+celltext) ;
          
          
           
        
          var celltext1=document.createTextNode(data[i].comments);
      
          var celltext2=document.createTextNode(data[i].username+" : ");
          
          console.log("cell "+i+" "+cell);
        
          cell.appendChild(celltext2);
          cell1.appendChild(celltext1);
          row.appendChild(cell);
          row.appendChild(cell1);
 

        div.appendChild(row);
        console.log("row "+i+" "+row);
      }
      
  dis.appendChild(div);
  console.log("movdis "+i+" "+dis);
});

    
}
    	/*for(var i=0;i<data.length;i++){
    		console.log(data[i]);
    		console.log(data[i].comments);
    	}
    
    
});
}*/
catch(e){
  console("error "+e);
}
}

document.getElementById("comment").addEventListener("click", comment);
document.getElementById("logout").addEventListener("click", logout);
document.getElementById("home").addEventListener("click", home);


function comment(){
  
  dat=document.getElementById("comments").value;  
  console.log(dat);
 console.log(user); 
  console.log(lan);
var $=window.jQuery;
$.post( "http://172.16.70.57:8000/forum/comments", { comments :dat,email :user,language:lan},function(data,status){
 /*var dis=document.getElementById("comm");
 var div=document.createElement("div");
 var row1=document.createElement("div");
        //var row = $("<tr />");
           console.log(dat);
           var cell2=document.createElement("p");
           var cell3=document.createElement("h1");
           
           var t2=document.createTextNode(user);
           var t1=document.createTextNode(dat);
     
          cell2.appendChild(t2);
          cell3.appendChild(t1);
          row1.appendChild(cell2);
          row1.appendChild(cell3);
          div.appendChild(row1);
          dis.appendChild(div);*/

          window.location.href="forumlan.html";
});
}


function logout() {
  window.location.href="index.html";

  // body...
}

function home() {
   window.location.href="home.html";

  // body...
}
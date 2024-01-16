var istatus=document.querySelector("h5");
var addfriend=document.querySelector("#add");

var flag=0;

addfriend.addEventListener("click",function(){
  if(flag==0)
  {
    istatus.innerHTML="Friends";
    istatus.style.color="green";
    addfriend.innerHTML="Remove Friend"
    flag=1;
  }
  else{  
   
    istatus.innerHTML="Stranger";
    istatus.style.color="red";
    addfriend.innerHTML=" Add Friend";

    flag=0;
  }
  
 
})



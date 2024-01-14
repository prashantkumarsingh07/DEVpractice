
var a=document.querySelector("button");
var b=document.querySelector(".bulb");

var flag=0;
a.addEventListener("click",function(){
  if(flag==0)
  {
    b.style.backgroundColor="yellow"
    flag=1;
  }
  else{
    b.style.backgroundColor="white"
    flag=0;
  }
  
}
)
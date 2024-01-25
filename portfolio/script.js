const icon =document.querySelector(".ri-contrast-2-fill")
const main =document.querySelector(".content");
const text=document.querySelector("h1 ");
const para=document.querySelector("p");


icon.addEventListener("click",function(){
  main.style.backgroundColor = "black";
  text.style.color="white";
  para.style.color="white";
 
})
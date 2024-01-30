const icon =document.querySelector(".ri-contrast-2-fill")




icon.onclick=function(){
 document.body.classList.toggle("dark-theme");
 if(document.body.classList.contains("dark-theme")){
  icon.src="/portfolio/sun-line.png" ;
 }
   else{
  icon.src="/portfolio/contrast-2-fill.png";
  }
}
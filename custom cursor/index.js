var main=document.querySelector("#main");
var crsr=document.querySelector(".cursor");
 
main.addEventListener("mousemove",function(de){
  crsr.style.left=de.x+"px";
  crsr.style.top=de.y+"px";

})
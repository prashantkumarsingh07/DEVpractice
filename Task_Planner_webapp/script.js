const inputbox=document.querySelector("input");
const list=document.getElementById("list");
const buttn=document.querySelector("button");
const span=document.querySelector("span");


buttn.addEventListener("click",function(){
  if(inputbox.value=="")
  {
    alert("Add some task first");
  }
  else 
  {
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00D7";
    li.appendChild(span);
    span.addEventListener("click",function(){
      span.style.display="none";
      li.style.display="none";
    })

  }

})




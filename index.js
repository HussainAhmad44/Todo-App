let btn=document.querySelector("button");
let inp=document.querySelector("input");
let b=document.querySelector("body");
btn.addEventListener("click",function(){
let list=document.createElement("li");
list.innerText=inp.value;
b.appendChild(list);
let delbtn=document.createElement("button");
delbtn.innerText="delete task";
delbtn.classList.add("button");
 delbtn.style.marginLeft = "10px";
list.appendChild(delbtn);
inp.value="";


delbtn.addEventListener("click",function(){
    list.remove();

})


});







const menu=document.querySelector(".menu");
const hamburger=document.querySelector("#icon");
const close=document.querySelector("#close_button");
hamburger.addEventListener("click", function(){
    menu.classList.add("show");
})

close.addEventListener("click",function(){
  menu.classList.remove("show");
});
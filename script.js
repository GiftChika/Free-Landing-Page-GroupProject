function tgl(){
    var t = document.getElementById("btn");
    if (t.value == "Dark mode") {
      t.value = "Light mode";
      document.body.style.background = "#171717";
      document.body.style.color = "white";
      
    } else if(t.value == "Light mode") {
      t.value = `Dark mode`;
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
}
  
let scrollContainer = document.querySelector(".child2");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

rightBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

leftBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});


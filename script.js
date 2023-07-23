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
//  mobile screen-icon
 const btn = document.getElementById('menu-btn')
 const nav = document.getElementById('menu')
 const vanish = document.getElementById('appear')
 btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    vanish.classList.toggle('remove-menu')
   
})
//   btn.addEventListener('click', () =>{
//      btn.classList.toggle('open')
     
//     nav.classList.toggle('hidden')
//  })


const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNaveBtn = document.querySelector("#close__nav-btn");
openNavBtn.addEventListener("click", function () {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNaveBtn.style.display = "inline-block";
});
function closeNav() {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNaveBtn.style.display = "none";
}
closeNaveBtn.addEventListener("click", closeNav);
if(window.innerWidth < 1024){
  document.querySelectorAll("#nav__items li a").forEach(navItem=>{
    navItem.addEventListener('click',()=>{
closeNav();
    })
  })
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    600:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    }
  }
});


window.onload = function()
{
   var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    Array.from(document.querySelectorAll('.div-footer')).forEach(div => {
         div.firstElementChild.onmouseover = function()
         {
            div.lastElementChild.classList.remove('d-none')
            div.lastElementChild.classList.add('divFooter')
         }
         div.firstElementChild.onmouseout = function()
         {
            div.lastElementChild.classList.add('d-none')
            div.lastElementChild.classList.remove('divFooter')
         }
    })
    Array.from(document.querySelectorAll('.nav-item')).forEach(div => {
        div.firstElementChild.onmouseover = function()
        {
           div.lastElementChild.classList.remove('d-none')
           div.lastElementChild.classList.add('divHeader')
        }
        div.firstElementChild.onmouseout = function()
        {
           div.lastElementChild.classList.add('d-none')
           div.lastElementChild.classList.remove('divHeader')
        }
   })
   ScrollReveal().reveal('#novedades', {delay: 500})
   if(screen.width >= 1200)
   {
      ScrollReveal().reveal('.producto1', {delay: 600})
      ScrollReveal().reveal('.producto2', {delay: 700})
      ScrollReveal().reveal('.producto3', {delay: 800})
      ScrollReveal().reveal('.producto4', {delay: 900})
      ScrollReveal().reveal('.producto5', {delay: 1000})
      ScrollReveal().reveal('.producto6', {delay: 1100})
      ScrollReveal().reveal('.producto7', {delay: 1200})
      ScrollReveal().reveal('.producto8', {delay: 1300})
   } else if(screen.width >= 992 && screen.width <1200)
   {
      ScrollReveal().reveal('.producto1', {delay: 600})
      ScrollReveal().reveal('.producto2', {delay: 700})
      ScrollReveal().reveal('.producto3', {delay: 800})
      ScrollReveal().reveal('.producto4', {delay: 900})
      ScrollReveal().reveal('.producto5', {delay: 1000})
      ScrollReveal().reveal('.producto6', {delay: 1100})
      ScrollReveal().reveal('.producto7', {delay: 100})
      ScrollReveal().reveal('.producto8', {delay: 200})
   
   } else 
   {
      ScrollReveal().reveal('.producto1', {delay: 500})
      ScrollReveal().reveal('.producto2', {delay: 500})
      ScrollReveal().reveal('.producto3', {delay: 500})
      ScrollReveal().reveal('.producto4', {delay: 500})
      ScrollReveal().reveal('.producto5', {delay: 500})
      ScrollReveal().reveal('.producto6', {delay: 500})
      ScrollReveal().reveal('.producto7', {delay: 500})
      ScrollReveal().reveal('.producto8', {delay: 500})
   }
  
}
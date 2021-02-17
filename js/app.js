
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
   ScrollReveal().reveal('#destacados',{delay: 500})
   ScrollReveal().reveal('#novedades', {delay: 500})
   ScrollReveal().reveal('.breadcrumb', {delay: 500})
   ScrollReveal().reveal('.categorias', {delay: 700})
   ScrollReveal().reveal('.producto', {delay: 900})
}
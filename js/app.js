
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
      let i=0; 
      delay_=500;
      cant =  Array.from(document.querySelector('#productos').children).length;
     for(let j=1 ; j<=cant;j++)
      {
         ScrollReveal().reveal('.producto' + j, {delay: delay_})
         if(i<3)
         {
            i++;
            delay_ += 100;
         } else 
         {        
            i=0;
            delay_=500;   
         }
         
      }
       
   } else if(screen.width >= 768 && screen.width <1200)
   {
      let i=0; 
      delay_=500;
      cant =  Array.from(document.querySelector('#productos').children).length;
     for(let j=1 ; j<=cant;j++)
      {
         ScrollReveal().reveal('.producto' + j, {delay: delay_})
         console.log(j)
         if(i<2)
         {
            i++;
            delay_ += 100;
         } else 
         {        
            i=0;
            delay_=500;   
         }        
      }
   } else 
   {
      let i=0; 
      delay_=500;
      cant =  Array.from(document.querySelector('#productos').children).length;
      ScrollReveal().reveal('.producto1', {delay: 1200})
      for(let j=2 ; j<=cant;j++)
      {
         ScrollReveal().reveal('.producto' + j, {delay: delay_})     
      }
   }   
            document.querySelector('.li-mat').onmouseover = function()
            {
               document.querySelector('.ul-mat').classList.remove('d-none')
               document.querySelector('.ul-mat').classList.add('mover')  
            }
            document.querySelector('.li-mat').onmouseout = function()
            {
               document.querySelector('.ul-mat').classList.add('d-none')
               document.querySelector('.ul-mat').classList.remove('mover')  
            }
}
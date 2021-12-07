/* header js(Responsive) */
let menu = document.querySelector(".responsive-menu .icon-menu-1");
let mainNavigation = document.querySelector(".main-navigation");
let linkItems = document.querySelector(".link-items");
let layout = document.querySelector(".layout");
menu.addEventListener("click", () => {
    if (menu.className === "icon-menu-1") {
        mainNavigation.classList.toggle("toggle");
        mainNavigation.classList.toggle("responsiveNav");
        menu.className = "icon-cancel";
        document.documentElement.style.overflowY = "hidden";

    } else {
        mainNavigation.classList.toggle("toggle");
        mainNavigation.classList.toggle("responsiveNav");
        menu.className = "icon-menu-1";
        document.documentElement.style.overflowY = "visible";
    }
});
/* custom header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".main-header").style.top = "0";

    } else if(window.innerWidth >992) {
        document.querySelector(".main-header").style.top = "-105px";
    }
    prevScrollpos = currentScrollPos;
};

/* toggle menu when the back to top button was clicked */
let backTop = document.querySelector(".back-to-top");
backTop.addEventListener("click", () => {
    if (menu.className === "icon-menu-1") {
        menu.className = "icon-menu-1";
    } else {
        mainNavigation.classList.toggle("toggle");
        menu.className = "icon-menu-1";
        document.documentElement.style.overflowY = "visible";
    }
})

 /* latest project */
var swiper = new Swiper('.swiper-container-project', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 3000
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-container-project .next-arrow',
        prevEl: '.swiper-container-project .prev-arrow',
    },
    pagination: {
        el: '.swiper-bullet',
    },
});

/*customer viewpoint*/
var swiper2 = new Swiper('.customer-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    grabCursor:true,
    centeredSlides:true,
    loop: true,
    autoplay: {
        delay: 6000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* Customer Brand Carousel Section */
var technology_carousel_post = new Swiper('.technology-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

/* back to top */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".back-to-top").addClass("show");
        } else {
            $(".back-to-top").removeClass("show");
        }
    });
    $(".back-to-top").click(function (e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: 0}, 600);
    })
})


/* Modal Box */ 

let modal = document.querySelector('.modal_form');
let cancel = document.querySelector('.icon-cancel');
let demandBtn = document.querySelector('.demand-btn');

demandBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.toggle('show')
    document.body.classList.toggle('modal-open')
})

cancel.addEventListener('click',()=>{
    modal.classList.toggle('show')
    document.body.classList.toggle('modal-open')
})

window.addEventListener('click',(e)=>{
  if(e.target == modal){
      modal.classList.toggle('show')
      document.body.classList.toggle('modal-open')
  }
})









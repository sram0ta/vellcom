const swiper__respects = new Swiper('.swiper', {
    autoplay: !1,
    allowTouchMove:true,
    grabCursor: true,
    spaceBetween: 8,
    direction: 'horizontal',
    // loop: true,
    // centeredSlides: true,
    // speed: 10,
    slidesPerView: 'auto',
    on: {
        init() {
            this.el.addEventListener("mouseenter", ()=>{
                this.autoplay.stop()
            }
            ),
            this.el.addEventListener("mouseleave", ()=>{
                this.autoplay.start()
            }
            )
        }
    }, 
    breakpoints: {// настройки для разных разрешений
        600: {
            slidesPerView: 3,
            spaceBetween: 24
        },
    },
    keyboard: {
        enabled: true,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  $(function() {
    $(".o_xs_menu").click(function() {
        $("body").css("overflow", "hidden"),
        $(".xs_menu").addClass("active")
    }),
    $(".c_xs_menu").click(function() {
        $("body").css("overflow", "auto"),
        $(".xs_menu").removeClass("active")
    })
    $(".overlay").click(function() {
        $("body").css("overflow", "auto"),
        $(".xs_menu").removeClass("active")
    })
});
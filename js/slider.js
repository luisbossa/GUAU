$(function () {
  setTimeout(function () {
    const swiper = new Swiper(".home-slider", {
      direction: "horizontal",

      loop: false,
      rewind: true,

      speed: 600,
      parallax: true,
      observer: true,

      slidesPerView: 1,
      allowTouchMove: true,

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },

      navigation: {
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      },

      thumbs: {
        swiper: {
          el: ".slider-thumbs",
          slidesPerView: "auto",
          threshold: 2,
          direction: "horizontal",
        },
      },

      scrollbar: {
        el: ".slider-scrollbar",
        dragSize: 75,
      },

      breakpoints: {
        960: {
          allowTouchMove: false,
          loop: true,
          rewind: false,
        },
      },
    });

    const progressEl = $(".progress");
    const autoplayDelay = swiper.params.autoplay.delay;

    progressEl.css("animation-duration", autoplayDelay + "ms");

    swiper.on("autoplayStop", () => {
      progressEl.css("animation-play-state", "paused");
    });

    swiper.on("autoplayStart", () => {
      progressEl.css("animation-play-state", "running");
    });

    // ==========================================
    // CAMBIAR COLOR DEL HEADER SEGÚN EL SLIDE
    // ==========================================

    function updateHeaderColor() {
      const activeSlide = $(".swiper-slide-active");
      const header = $(".site-header");

      if (activeSlide.hasClass("theme-dark")) {
        header.addClass("header-dark");
      } else {
        header.removeClass("header-dark");
      }
    }

    // Ejecutar al cargar
    updateHeaderColor();

    // Ejecutar cada vez que cambia el slide
    swiper.on("slideChange", function () {
      setTimeout(function () {
        updateHeaderColor();
      }, 10);
    });

    // ==========================================
    // SCROLLBAR MOBILE
    // ==========================================

    if ($(window).width() < 960) {
      if ($(".swiper-slide-active .slider-info").hasClass("has-overlay")) {
        $("body").addClass("reversed-scrollbar");
      }

      swiper.on("slideChangeTransitionStart", function () {
        if ($(".swiper-slide-active .slider-info").hasClass("has-overlay")) {
          $("body").addClass("reversed-scrollbar");
        } else {
          $("body").removeClass("reversed-scrollbar");
        }
      });
    }
  }, 100);
});

// ==========================================
// CURSOR PREV / NEXT
// ==========================================

function splitScreen() {
  if ($(window).width() >= 960) {
    $(document).mousemove(function (e) {
      var x = e.pageX;

      if (x < $(window).width() / 2) {
        $(".home-slider").removeClass("next").addClass("prev");
      } else {
        $(".home-slider").removeClass("prev").addClass("next");
      }
    });
  }
}

$(document).ready(function () {
  splitScreen();
});

$(window).resize(function () {
  splitScreen();
});

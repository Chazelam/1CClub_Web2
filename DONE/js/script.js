$(document).ready(function () {
  $(".bxslider").bxSlider({
    pager: false,
    // captions: true,
    auto: true,
  });
});

$(document).ready(function () {
  $(".bxslider_team").bxSlider({
    // pager: false,
    // captions: true,
    auto: true,
    controls: false,
  });
});

$(document).ready(function () {
  $(".flexslider").flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 200,
    itemMargin: 25,
    touch: true,
  });
});

$(document).ready(function () {
  $(".accordion").accordion({
    defaultOpen: "",
  });
});

$(function () {
  let filterList = {
    init: function () {
      $(".workportfolio").mixitup({
        targetSelector: ".portfolio",
        filterSelector: ".filter",
        effects: ["fade"],
        easing: "snap",
      });
    },
  };
  filterList.init();
});

$(document).ready(function ($) {
  $(".primary-nav-trigger").on("click", function () {
    $(".menu-icon").toggleClass("is-clicked");
    $(".primary-nav").toggleClass("is-visible");
    $("body").toggleClass("overflow-hidden");
  });
});

$(".primary-nav").on("click", "a", function (event) {
  event.preventDefault();
  let id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body, html").animate({ scrollTop: top }, 1000);

  $(".primary-nav").toggleClass("is-visible");
  $(".menu-icon").toggleClass("is-clicked");
  $("body").toggleClass("overflow-hidden");
});

let headerHeight = $(".topheader").height();
$(window).on("scroll", { previousTop: 0 }, function () {
  let currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    if (!(currentTop > 0) && $(".topheader").hasClass("is-fixed")) {
      $(".topheader").removeClass("is-fixed");
    }
  } else {
    if (currentTop > headerHeight && !$(".topheader").hasClass("is-fixed")) {
      $(".topheader").addClass("is-fixed");
    }
  }
  this.previousTop = currentTop;
});

$("#send").on("click", function () {
  console.log("click!");
  if (
    $("#name").val() != "" &&
    $("#email").val() != 0 &&
    $("#msg").val() != 0
  ) {
    fetch("send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: $("#send_form").serialize(),
    }).then((response) => response.json()).then((data) => {
        if (data.status === "ok") {
          $("#send_form").addClass("send_success");
          setTimeout(() => $("send_form").removeClass("send_success"), 4000);
        }
        if (data.status === "error") {
          $("send_form").addClass("send_fail");
          setTimeout(() => $("send_form").removeClass("send_fail"), 4000);
        }
      });
  } else {
    alert("Заполните обязательные поля!");
  }
});

function disableScroll() {
  const originalOverflow = document.body.style.overflow;

  document.body.style.overflow = 'hidden';

  // Блокируем touch события для мобильных устройств
  const preventDefault = (e) => e.preventDefault();
  document.addEventListener('touchmove', preventDefault, { passive: false });

  setTimeout(() => {
      document.body.style.overflow = originalOverflow || '';
      document.removeEventListener('touchmove', preventDefault);
  }, 5000);
}

$(window).load(function(){
  disableScroll();
  $('.preload').delay(5000).fadeOut("slow");
});
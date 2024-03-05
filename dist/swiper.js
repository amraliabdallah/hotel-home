document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    // loop: true,
    // If we need pagination
    spaceBetween: 35,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 900,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        spaceBetween: 16,
        slidesPerView:2 ,
      },
      370: {
        spaceBetween: 16,
        slidesPerView:3 ,
      },
      690: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 7,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper(".mainSwiper", {

    // If we need pagination
    swiperPerPage:1,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },


  });
});

  // Statistics section 
  let StatisticsSection = document.querySelector("section.Statistics");
  let nums = document.querySelectorAll(".Statistics .cards .num");
let started = false; // Function Started ? No
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 100 / goal);
}
if(StatisticsSection != null) {
  window.onscroll = function () {
    if (window.scrollY >= StatisticsSection.offsetTop - 600) {
      if (!started) {
          setTimeout(() => {
            nums.forEach((num) => startCount(num));
            
          }, 500);
      }
      started = true;
    }
  };
}


window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var targetDiv = document.getElementById('target');
  
  if (scrollTop !== 0) {
    targetDiv.classList.add('bg-secondary');
    targetDiv.classList.remove('bg-transparent');
  } else {
    targetDiv.classList.remove('bg-secondary');
    targetDiv.classList.add('bg-transparent');
  }
});
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
  var swiper = new Swiper(".mySwiper2", {
    // loop: true,
    // If we need pagination

    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {

        slidesPerView:2 ,
      },
      370: {

        slidesPerView:3 ,
      },
      690: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 6,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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
  }, 10000/ goal);
}
if(StatisticsSection != null) {
  window.onscroll = function () {
    if (window.scrollY >= StatisticsSection.offsetTop - 600) {
      if (!started) {
          setTimeout(() => {
            nums.forEach((num) => startCount(num));
            
          }, 1);
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


const container = document.querySelector('.map');
const markers = document.querySelectorAll('.animated-marker');

const positions = [
    { left: '16%', top: '28%' },  // Adjust positions as desired
    { left: '50%', top: '26%' },
    { left: '45%', top: '18%' },
    { left: '32%', top: '63%' },
    { left: '71%', top: '43%' },
    { left: '62%', top: '38%' },
    { left: '55%', top: '35%' },
    { left: '58%', top: '35%' },
    { left: '44%', top: '33%' },
    { left: '50%', top: '38%' },


];

function animateMarkers(duration = 500) {
    markers.forEach((marker, index) => {
        marker.style.left = positions[index].left;
        marker.style.top = positions[index].top;

        // Simulate random activation for each marker (optional)
        if (Math.random() > 0.5) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });

    setTimeout(() => {
        animateMarkers(duration); // Recursively call for continuous animation
    }, duration);
}

animateMarkers(); // Start the animation

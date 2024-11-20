var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
});


// cursor following effect
var cursor = document.querySelector(".cursor-dot");
var cursorInner = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;

  cursorInner.animate({
    left: `${x}px`,
    top: `${y}px`,
  }, {
    duration: 500,
    fill: "forwards"
  })
});
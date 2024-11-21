// Clone testimonials for infinite scroll
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonials-track');
  const cards = track.querySelectorAll('.testimonial-card');
  
  // Clone cards and append them to create the infinite effect
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
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
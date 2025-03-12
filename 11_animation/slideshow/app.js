let index = 0;
console.log("app.js has been imported")
const slides = 
  document.getElementsByClassName("slide")
const slides_display = 
  document.getElementsByClassName("slide-display")
function showSlide(){
  
  slides[index].classList.remove("show");
  slides_display[index].classList.remove("show");
  index = (index + 1) % slides.length;
  slides[index].classList.add("show");
  slides_display[index].classList.add("show");

}


setInterval(showSlide, 1500);

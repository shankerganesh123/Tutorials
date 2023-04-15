
/*slider*/
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let index = 0;
prev.addEventListener("click", function () {
   prevSlide();
});

next.addEventListener("click", function () {
   nextSlide();
});

function prevSlide() {
   if (index == 0) {
      index = slides.length - 1;
   } else {
      index--;
   }
   changeSlide();
}

function nextSlide() {
   if (index == slides.length - 1) {
      index = 0;
   } else {
      index++;
   }
   changeSlide();
}

function changeSlide() {
   slides.forEach(function (item) {
      item.classList.remove("active")
   })
   slides[index].classList.add("active")

   //adding code to show active dot indicators
   let indicators = document.querySelectorAll(".indicatorContainer > div");
   indicators.forEach(function (indicators) {
      indicators.classList.remove("active");
   });
   indicators[index].classList.add("active");
}

// dot indicators for sliing

const indicatorContainer = document.querySelector(".indicatorContainer");

function buildIndicator() {
   for (let i = 0; i < slides.length; i++) {
      let element = document.createElement("div");
      element.dataset.i = i + 1;
      element.setAttribute("onclick", "gotoSlide(this)");

      //making first dot active by default
      if (i == 0) {
         element.classList.add("active");
      }

      indicatorContainer.appendChild(element);
   }
}

buildIndicator();

// end dot indicators for sliing

//create got slide function
function gotoSlide(element) {
   let k = element.dataset.i;
   index = k - 1;
   changeSlide();
}

//auto slide
let time = setInterval(nextSlide, 7000);
/*end slider*/


/*menu*/

function myFunction() {
   document.getElementById('menu').style.display = "none";
}

function openMenu() {
   document.getElementById('menu').style.display = "block";
}

function a() {
   alert('ok');
}

/*end menu*/

/* course tabs*/


/*menu collapse*/





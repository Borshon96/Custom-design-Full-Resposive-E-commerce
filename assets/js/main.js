// Special Countdown
// let daysItem = document.querySelector("#days");
// let hoursItem = document.querySelector("#hours");
// let minItem = document.querySelector("#min");
// let secItem = document.querySelector("#sec");

// let countDown = () => {
//     let futureDate = new Date("30 November 2021");
//     let currentDate = new Date();
//     let myDate = futureDate - currentDate;

//     let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
//     let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
//     let min = Math.floor(myDate / 1000 / 60) % 60;
//     let sec = Math.floor(myDate / 1000) % 60;

//     daysItem.innerHTML = days;
//     hoursItem.innerHTML = hours;
//     minItem.innerHTML = min;
//     secItem.innerHTML = sec;
// }

// countDown()

// setInterval(countDown, 1000)

// Scroll Back To Top
// function scrollTopBack(){
//     let scrollTopButton = document.querySelector("#scrollUp");
//     window.onscroll = function (){
//         var scroll = document.documentElement.scrollTop;
//         if(scroll >= 250){
//             scrollTopButton.classList.add('scrollActive');
//         } else{
//             scrollTopButton.classList.remove('scrollActive');
//         }
//     }
// }
// scrollTopBack();

// nav hide
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

//stat_counter
// div location
//tooltip
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

//
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

//vid autoplay
function enableAutoplay() {
  var vid = document.getElementById("myVideo");
  vid.autoplay = true;
  vid.load();
}

function disableAutoplay() {
  var vid = document.getElementById("myVideo");
  vid.autoplay = false;
  vid.load();
}

//wishbutton
// function changeColor(event) {
//   const el = event.target;
//   el.setAttribute('style', 'color: blue');
// }

// function myFunction() {
//   document.getElementById("foo").setAttribute("class", "bbh");
// }

//
function myFunction() {
  var x = document.getElementById("wishLogo");
  if (x.style.color === "gray") {
    x.style.color = "#ff9212";
  } else {
    x.style.color = "gray";
  }
}
function myFunction2() {
  var x = document.getElementById("wishLogo2");
  if (x.style.color === "gray") {
    x.style.color = "#ff9212";
  } else {
    x.style.color = "gray";
  }
}


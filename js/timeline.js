// Get the id of the <path> element and the length of <path>
var mainPath = document.getElementById("main-path");
var firstPath = document.getElementById("first-path");
var secondPath = document.getElementById("second-path");
var length = firstPath.getTotalLength();

// The start position of the drawing
//main.style.strokeDasharray = length;
firstPath.style.strokeDasharray = length;
secondPath.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
mainPath.style.strokeDashoffset = length;
firstPath.style.strokeDashoffset = length;
secondPath.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent * 5;

  // Reverse the drawing (when scrolling upwards)
  // mainPath.style.strokeDashoffset = length - draw;
  firstPath.style.strokeDashoffset = length - draw;
  secondPath.style.strokeDashoffset = length - draw;
}

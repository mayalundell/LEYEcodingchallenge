// function to keep header sticky upon scrolling
const navBar = document.querySelector('.header');
let topBar = navBar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= topBar) {    
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

$(window).resize(function () { 
});

/* if (screen.width > 954) {
  console.log(screen.width);
  // document.getElementById("top-navbar-mobile").style.display = "none";
  // document.getElementById("top-navbar-desktop").style.display = "flex";
} */



function reportWindowSize() {
  var widthOutput = window.innerWidth;
  if (widthOutput > 948) { // If media query matches
    document.getElementById("top-navbar-mobile").style.display = "none";
    document.getElementById("top-navbar-desktop").style.display = "flex";
  } else {
    document.getElementById("top-navbar-desktop").style.display = "none";
  }
}

window.onresize = reportWindowSize;

// function to open and close hamburger menu on click
function toggleHamburgerMenu() {

    var x = document.getElementById("top-navbar-mobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
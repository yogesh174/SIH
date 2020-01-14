$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("medium");
        });
});

var homePage = document.querySelector(".home");
var cartPage = document.querySelector(".thecart");
var profPage = document.querySelector(".theprofile");

var oneE = document.querySelector(".onee");
var oneO = document.querySelector(".oneo");
var twoO = document.querySelector(".twoo");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var disc = document.querySelector(".dis2");
var toHome = document.querySelector(".to-home");

oneO.addEventListener("click", function(){
    homePage.style.display = "none";
    profPage.style.display = "none";
    cartPage.style.display = "block";
});

twoO.addEventListener("click", function(){
    homePage.style.display = "none";
    profPage.style.display = "block";
    cartPage.style.display = "none";
});

one.addEventListener("click", function(){
    homePage.style.display = "none";
    profPage.style.display = "none";
    cartPage.style.display = "block";
});

two.addEventListener("click", function(){
    homePage.style.display = "none";
    profPage.style.display = "block";
    cartPage.style.display = "none";
});

oneE.addEventListener("click", function(){
    homePage.style.display = "block";
    profPage.style.display = "none";
    cartPage.style.display = "none";
});

disc.addEventListener("click", function(){
    homePage.style.display = "block";
    profPage.style.display = "none";
    cartPage.style.display = "none";
});

toHome.addEventListener("click", function(){
    homePage.style.display = "block";
    profPage.style.display = "none";
    cartPage.style.display = "none";
});

// var myCart = document.querySelector(".cart");
// var myProfile =document.querySelector(".prof");


// oneO.addEventListener('mouseover', function(){
//     myCart.textContent = "My Cart";
//     myCart.style.marginLeft  = "10px";
//     oneO.style.width = "40%";
// });

// oneO.addEventListener('mouseout', function(){
//     myCart.textContent = "";
//     oneO.style.width = "20px";
// });

// twoO.addEventListener('mouseover', function(){
//     myProfile.textContent = "My profile";
//     myProfile.style.marginLeft  = "10px";
//     twoO.style.width = "40%";
// });

// twoO.addEventListener('mouseout', function(){
//     myProfile.textContent = "";
//     twoO.style.width = "20px";
// });
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//      document.body.style.backgroundColor = "pink";
//     }
// }
  
//   var x = window.matchMedia("(max-width: 700px)");
//   myFunction(x); 
//   x.addListener(myFunction);
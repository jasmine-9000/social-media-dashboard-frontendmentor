var darktoggle = document.querySelector(".header__darkmode__toggle");
var header_container = document.querySelector(".header");
var cards_container = document.querySelector(".cards");
var overview_container = document.querySelector(".overview");

var header_elements = header_container.querySelectorAll("*"); // select ALL DESCENDENTS (not just children)
var cards_elements = cards_container.querySelectorAll("*");
var overview_elements = overview_container.querySelectorAll("*");

darktoggle.addEventListener("click", (e) => {
    document.getElementById("darkmode__toggle").classList.toggle("dark");
    darktoggle.classList.toggle("toggled");
    darktoggle.classList.toggle("dark");
    document.body.classList.toggle("dark");
    header_container.classList.toggle("dark");
    for(let i = 0; i < header_elements.length; i++) {
        header_elements[i].classList.toggle("dark");
    }
    
    cards_container.classList.toggle("dark");
    for(let i = 0; i < cards_elements.length; i++) {
        cards_elements[i].classList.toggle("dark");
    }

    overview_container.classList.toggle("dark");
    for(let i = 0; i < overview_elements.length; i++) {
        overview_elements[i].classList.toggle("dark");
    }

});

// detect screen resolution and display it.
var pxr = window.devicePixelRatio;
document.getElementById("height").innerHTML = window.screen.height;
document.getElementById("width").innerHTML = window.screen.width;

// fill in author

document.getElementById("author").innerHTML = "Jasmine Kerr";
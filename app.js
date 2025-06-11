let navbardiv = document.querySelector(".navbar-div");
let menu = document.querySelector("div");
let navbar = document.querySelector(".navbar");
let btn = document.querySelector(".burger");
let back = document.querySelector(".main-sec");


btn.addEventListener("click", () => {
    console.log("burger was clicked");
    navbar.remove();
    navbardiv.classList.add("menu");
})

back.addEventListener("click", () => {
    navbardiv.classList.remove("menu");
    navbardiv.appendChild(navbar);
})


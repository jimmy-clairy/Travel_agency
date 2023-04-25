const hamburgerButton = document.querySelector(".btn-toggle")
const navigation = document.querySelector(".nav-slider")
const navLink = document.querySelectorAll(".nav-slider a")
console.log(navLink);

hamburgerButton.addEventListener("click", toggleNav)
navLink.forEach((a) => a.addEventListener("click", toggleNav))

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}
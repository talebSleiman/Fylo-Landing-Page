let landingEmail = document.querySelector(".landing-email");
let landingSpan = document.querySelector(".landing-span");

let formEmail = document.querySelector(".form-email");
let formSpan = document.querySelector(".form-span");

landingEmail.addEventListener("input", (e) => {
    if (!checkEmail(e.target.value)) {
        landingSpan.innerHTML = "Please check your email";
    } else {
        landingSpan.innerHTML = "";
    }
});

formEmail.addEventListener("input", (e) => {
    if (!checkEmail(e.target.value)) {
        formSpan.innerHTML = "Please check your email";
    } else {
        formSpan.innerHTML = "";
    }
});

function checkEmail(val) {
    let regex = /\w+@\w+\.\w+/ig;
    return val.match(regex) == null ? false : true;
}
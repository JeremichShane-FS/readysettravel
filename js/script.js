const nav = document.getElementById("nav");
const mobile = document.getElementById("mobile");

nav.addEventListener("click", function () {
  nav.classList.toggle("is-active");
  mobile.classList.toggle("is-active");

  if (nav.classList.contains("is-active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

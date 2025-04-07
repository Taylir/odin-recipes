const homeLink = document.querySelector(".backHome");
const url = new URL(window.location.href);

if (url.host.includes("5551")) {
  homeLink.setAttribute("href", "/");
} else {
  homeLink.setAttribute("href", "/odin-recipes/");
}

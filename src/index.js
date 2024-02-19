import "./style.css";
import logo from "./assets/logo.png";

import generateMenuTab from "./helperFunctions/menu_tab.js";
import generateAboutTab from "./helperFunctions/about_tab.js";
import generateContactTab from "./helperFunctions/contact_tab.js";

console.log("I am here!");

const buttons = document.querySelectorAll(".nav_button");
console.log(buttons);

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("BUTTON PRESSED");
//   });
// });

buttons[0].addEventListener("click", (e) => {
  e.preventDefault();
  content_container.innerHTML = "";
  content_container.appendChild(generateMenuTab());
});

buttons[1].addEventListener("click", (e) => {
  e.preventDefault();
  content_container.innerHTML = "";
  content_container.appendChild(generateAboutTab());
});

buttons[2].addEventListener("click", (e) => {
  e.preventDefault();
  content_container.innerHTML = "";
  content_container.appendChild(generateContactTab());
});

const content_container = document.getElementById("content");
console.log(content_container);

const header = document.getElementById("restaurant-name");
// console.log(header);
const restaurantLogo = new Image();
// restaurantLogo.style = "background: #ebffc7; width: 100px;";
restaurantLogo.src = logo;
header.appendChild(restaurantLogo);

const about_tab = document.createElement("div");
about_tab.classList.add("main-tab");
about_tab.id = "about_tab";

const contact_tab = document.createElement("div");
contact_tab.classList.add("main-tab");
contact_tab.id = "contact_tab";

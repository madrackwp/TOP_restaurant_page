import "./style.css";
import logo from "./assets/logo.png";

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

function generateMenuTab() {
  const menu_tab = document.createElement("div");
  menu_tab.classList.add("main-tab");
  menu_tab.id = "menu_tab";

  for (let _ = 0; _ < 5; _++) {
    let childNode = document.createElement("p");
    childNode.innerHTML = "MENU CONTENT";
    menu_tab.appendChild(childNode);
  }
  return menu_tab;
}

function generateAboutTab() {
  const about_tab = document.createElement("div");
  about_tab.classList.add("main-tab");
  about_tab.id = "about_tab";

  for (let _ = 0; _ < 5; _++) {
    let childNode = document.createElement("p");
    childNode.innerHTML = "ABOUT CONTENT";
    about_tab.appendChild(childNode);
  }
  return about_tab;
}

function generateContactTab() {
  const contact_tab = document.createElement("div");
  contact_tab.classList.add("main-tab");
  contact_tab.id = "contact_tab";

  for (let _ = 0; _ < 5; _++) {
    let childNode = document.createElement("p");
    childNode.innerHTML = "CONTACT CONTENT";
    contact_tab.appendChild(childNode);
  }
  return contact_tab;
}

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

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

export default generateAboutTab;

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

export default generateMenuTab;

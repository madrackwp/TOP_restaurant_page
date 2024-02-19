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

export default generateContactTab;

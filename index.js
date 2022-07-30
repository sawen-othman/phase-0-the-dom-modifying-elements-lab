main.remove();
const newHeader = document.createElement("h1");
document.body.append(newHeader);
newHeader.setAttribute("id", "victory");
const element = document.getElementById("victory");
element.textContent = "YOUR-NAME is the champion";

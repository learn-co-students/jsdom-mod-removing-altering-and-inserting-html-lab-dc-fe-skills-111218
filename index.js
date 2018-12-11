/* Enter the code to remove the main node element under this comment */
document.querySelector('main')
let maindiv = document.querySelector('main')
maindiv.remove()

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")
newHeader.innerText = "Christina is the champion"
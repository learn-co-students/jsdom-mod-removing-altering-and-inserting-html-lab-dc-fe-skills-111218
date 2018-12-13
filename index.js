/* Enter the code to remove the main node element under this comment */
const maindiv = document.getElementById("main");
maindiv.remove();

/* Create your new element here and assign it to newHeader */
var newHeader = document.createElement ("h1");
document.body.appendChild (newHeader);
newHeader.setAttribute ("id", "victory");
var text = 'Bob Shnoodles is the champion!';
newHeader.innerText = text;
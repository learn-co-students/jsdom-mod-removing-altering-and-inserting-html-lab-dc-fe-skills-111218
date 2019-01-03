/* Enter the code to remove the main node element under this comment */
let ul = document.getElementById('main');
ul.remove('main');
/* Create your new element here and assign it to newHeader */
/*const newHeader = victory;

var element = document.createElement(victory['h1']);
let h1 = "Nathan is the champion!"; */

let newHeader = document.createElement('h1');


function addElement (newHeader) { 
  // create a new div element 
  var victory = document.createTextNode("Nathan is the champion!"); 
  // add the text node to the newly created div
  newHeader.appendChild('victory');
}

/* newHeader.appendChild('victory'); */

var h1 = document.createElement('victory'["Nathan is the champion!"]);

newHeader.id = 'victory'
newHeader.innerText = 'Nathan is the champion!'
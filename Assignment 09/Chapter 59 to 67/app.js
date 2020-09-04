
// Task 1

//i

var mainContent = document.getElementById("main-content");
var showMainContent = document.getElementById("showMainContet");


//ii

console.log(mainContent.children);

// iii

var renderElements = document.getElementsByClassName("render");
console.log(renderElements);

for(var i=0; i<renderElements.length; i++)
{
      showMainContent.innerHTML += renderElements[i].innerHTML
}


// iv

var firstName = document.getElementById("first-name");
firstName.value = "Abdul Rafay ";

//v

var lastName = document.getElementById("last-name");
lastName.value = "Khan";

var email = document.getElementById("email");
email.value = "rafaykhan.work@gmail.com";


// Task 2

i
var formContent = document.getElementById("form-content");
console.log(formContent.nodeType);
ii

var lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.firstChild.nodeType);


iii

var lastName = document.getElementById("lastName");
var textNode = document.createTextNode("Bank of habib");

console.log(lastName.firstChild);
lastName.appendChild(textNode)

iv

var mainContent = document.getElementById("main-content");
console.log(mainContent.firstChild);
console.log(mainContent.lastChild);



v

var lastName = document.getElementById("lastName");
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);



vi

var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);
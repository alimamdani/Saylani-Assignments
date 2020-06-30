// Chapter 26-30

// Task 1

// var userNumber = +prompt("Enter the number");
// document.write("Number: " + userNumber);
// document.write("<br>")
// document.write("Round off value: " + Math.round(userNumber));
// document.write("<br>")
// document.write("Floor off value: " + Math.floor(userNumber));
// document.write("<br>")
// document.write("Ceil off value: " + Math.ceil(userNumber));


// Task 2
// For negative number
// var userNumber = +prompt("Enter the number");
// document.write("Number: " + userNumber);
// document.write("<br>")
// document.write("Round off value: " + Math.round(userNumber));
// document.write("<br>")
// document.write("Floor off value: " + Math.floor(userNumber));
// document.write("<br>")
// document.write("Ceil off value: " + Math.ceil(userNumber));


// Task 3

// var value = -4;
// var absValue = Math.abs(value);
// document.write("Absolute value of " + value + " is: " + absValue);

// Task 4

// var randomDiceValue1 = Math.random();
// document.write("Random dice value: " + Math.floor(randomDiceValue1 * 3));
// document.write("<br>");
// document.write("Random dice value: " + Math.floor(randomDiceValue1 * 2));


// Task 5

// var heads = Math.floor((Math.random()*2) + 1);

// if(heads === 2){
//     document.write(heads)
//     document.write("<br>");
//     document.write("Random coin value heads");
// }else{
//     document.write(heads)
//     document.write("<br>");
//     document.write("Random coin value tails");
// }

// Task 6

// var randNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Value between 1 and 100: " + randNumber);

// Task 7

// var userWeight = prompt("What is your weight");

// document.write("The weight of the user is: " + userWeight.split("k")[0] + " kilograms");


// Task 8

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userNumber = +prompt("Guess the number");

// if(secretNumber === userNumber)
// {
//     document.write("The number matched");
// }else{
//     alert("Try Again!!!");
// }
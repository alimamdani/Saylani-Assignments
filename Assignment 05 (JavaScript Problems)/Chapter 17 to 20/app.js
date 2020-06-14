// Chapter 17-20

//Task 1

// var multiDimensionalArray = [[1,2,3],[2,4,6]];

// // Task 2

// var matrix = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

// for(i =0; i<matrix.length; i++)
// {
//        document.write(matrix[i].join(" "))
//        document.write("<br>")
// }

// Task 3

// for(var i=0; i<11; i++){
//     document.write(i);
//     document.write("<br>");
// }

// // Task 4

// var tableAsk = +prompt("Enter the table number you want to see");
// var lenghtAsk = +prompt("What should be the length of the table");

// for(var i=1; i<=lenghtAsk; i++){
//     document.write(tableAsk + " X " + i + " = " + tableAsk*i);
//     document.write("<br>");
// }

// Task 5

// var fruits = ["apple","banana","mango","orange","strawberry"];
// document.write(fruits.length + "<br>");
// for(var i=0; i<fruits.length; i++){
//    document.write("Element at index " + i + " is " + fruits[i]);
//    document.write("<br>");
// }

//Task 6

//A 

// document.write("<br>");
// document.write("Counting: ")
// for (var i = 1; i < 16; i++) {
//     document.write(i + " ");
// }

// // B
// document.write("<br>");
// document.write("Reverse counting: ");
// for (var i = 10; i > 0; i--) {
//     document.write(i + " ");
// }

// // C
// document.write("<br>");
// document.write("Even ");
// for (var i = 0; i < 21; i++) {
//     if (i % 2 === 0)
//         document.write(i + " ");
// }

// // D 
// document.write("<br>");
// document.write("Odd ");
// for (var i = 0; i < 21; i++) {
//     if (i % 2 !== 0)
//         document.write(i + " ");
// }

// //E
// document.write("<br>");
// document.write("Series: ");
// for (var i = 2000; i <= 20000; i= i + 2000) {
//     document.write(i + " ");
// }


// Task 7

// var sweets = ["cake","apple pie", "cookie", "chips", "patties"];

// var ask = prompt("Welcome to Fy bakery...What do you want to order sir/ma'am?");

// var findSweet = sweets.find(sweet => sweet == ask);
// var findSweetIndex = sweets.findIndex(sweet => sweet === ask);
// console.log(findSweetIndex);
// console.log(findSweet);
//  if(findIt != undefined)
// document.write(findIt + " is available at index ");


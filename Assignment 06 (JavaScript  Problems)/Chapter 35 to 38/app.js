// Chapter 35-38


// Task 1

// function showDate(){
//     var date = new Date();
//     document.write(date);
// }
// showDate();


// Task 2

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// showName(firstName,lastName);
// function showName(fName,lName){
//     document.write("Hello " + firstName + " " + lastName)
// }

// Task 3

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");

// document.write("Sum is " + sum(firstNumber,secondNumber));

// function sum(fNum,sNum){
//    return fNum + sNum
// }


// Task 4

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operator = prompt("Enter the desired operator");

// document.write("The result is: " + calcu(firstNumber,secondNumber,operator))
// function calcu(firstNumber, secondNumber, operator) {
//     var result = 0;
//     switch (operator) {
//         case "+":
//             result = firstNumber + secondNumber
//             break;
//         case "-":
//             result = firstNumber - secondNumber
//             break;
//         case "/":
//             result =  firstNumber / secondNumber
//             break;
//         case "*":
//             result =  firstNumber * secondNumber
//             break;
//         case "%":
//             result =   firstNumber % secondNumber
//             break;
//         default:
//             break;
//     }
//     return result;
// }


// Task 5

// var num = +prompt("Enter the number to square it");
// document.write("Square of " + num + " is: " + squareNumber(num));
// function squareNumber(number){
//     return number*number;
// }

// Task 6

// var facNumber = +prompt("Enter number to find it's factorial");
// document.write("Factorial of " + facNumber + " is: " + findFactorial(facNumber));
// function findFactorial(facNumber){
//     var result = 1;
//     for(var i=facNumber; i>0; i--){
//         result = result * i;
//         facNumber--;
//     } 
//     return result;
// }

// Task 7

// var startNumber = +prompt("Enter start number");
// var endtNumber = +prompt("Enter end number");
// printNumbers(startNumber,endtNumber);
// function printNumbers(startNumber, endNumber){
//     for(var i=startNumber; i<=endNumber; i++){
//         document.write(i + "<br>")
//     }
// }


// Task 8

// var base = +prompt("Enter the value of base");
// var perpendicular = +prompt("Enter the value of perpendicular");

// document.write("The hypontenuse of a right angle triangle is: " + calculateHypotenuse(base,perpendicular));

// function calculateHypotenuse(base,perpendicular){

//     return hypo = calculateSquare(base) + calculateSquare(perpendicular);


//     function calculateSquare(value){
//         return value*value;
//     }
// }


// Task 9

// var width = +prompt("Enter the value of width");
// var height = +prompt("Enter the value of height");

// document.write("Area of rectangle: " + calculateAreaOfRectangle(width,height));
// document.write("<br>")
// document.write("Area of rectangle: " + calculateAreaOfRectangle(7,9));

// function calculateAreaOfRectangle(width,height){
//     return width*height;
// }

// Task 10

// var enteredString = prompt("Enter the string to check if it's palindrome");
// document.write("Palindrome :" + checkPalindrome(enteredString));
// function checkPalindrome(enteredString) {
//     var result = false;
//     var arrValue = enteredString.split("");
//     for (var i = 0; i < arrValue.length - 1; i++) {
//         for (var j = arrValue.length - 1; j >= 0; j--) {
//             if (arrValue[i] === arrValue[j]) {
//                 i++;
//                 result = true;
//             } else {
//                 result = false
//             }
//         }
//     }

//     return result;

// }

// Task 11

// var stringWord = "the quick brown box";

// document.write("Change first case: " + ChangeCase(stringWord));

// function ChangeCase(stringWord){
//     var word = stringWord.split(" ");

//     var result = [];

//     for(var i=0; i<word.length; i++){
//         //var arrWord = word[i].split("");
//       result = result + " " + word[i].slice(0,1).toUpperCase() + "" + word[i].slice(1); 
//     }
//    return result;
// }

// Task 12

// var strWord = "Web Development Tutorial Course ";
// document.write("Longest word is: " + findLongest(strWord));
// function findLongest(wordValue){
//   var arrWord = wordValue.split(" ");
//   var result = 0;

//   for(var i=0; i<arrWord.length -1; i++){
//     if(arrWord[i].length > arrWord[i+1].length){
//           result = arrWord[i]
//     }else{
//           result = arrWord[i+1];
//     }
//   }
//   return result;
// }

// Task 13

// var strWord = "Web Development";
// var strChar = "e";

// document.write("In " + strWord + " the occurence of word " + strChar + " is: " + findWord(strWord,strChar) + " times");

// function findWord(stringWord, charWord) {
//   var arrString = strWord.split("");
//   var count = 0;
//   for (var i = 0; i < arrString.length ; i++) {
//     if (arrString[i] == charWord) {
//       count++;
//     }
//   }
//   return count;
// }


// Task 14

// document.write("Circumference of a circle is: " + calcCircumference(50));
// document.write("Area of a circle is: " + calcArea(50));

// function calcCircumference(radiusValue) {
//   return 2 * 3.142 * radiusValue;
// }

// function calcArea(radiusValue){
//   return 3.142*radiusValue*radiusValue;
// }

//Chapter 9-11

//Task 1

// var cityName = prompt("Enter city name");

// if(cityName.toUpperCase() === "KARACHI"){
//     document.write("Welcome to city of lights");
// }

// Task 2

// var gender = prompt("Enter your gender");
// if(gender.toUpperCase() === "MALE"){
//     document.write("<br> Good Morning Sir")
// }else if(gender.toUpperCase() === "FEMALE"){
//     document.write("<br> Good Morning Ma'am");
// }

//Task 3

// var trafficColor = prompt("Enter road traffic signal color");
// if(trafficColor.toUpperCase() === "RED"){
//      document.write("<Table>"
//      +"<th>Signal Color</th><th>Message</th>"
//      +"<tr><th>Red</th><th>Must Stop</th></tr>"
//      +"</Table>")
// }else if(trafficColor.toUpperCase() === "YELLOW"){
//     document.write("<Table>"
//     +"<th>Signal Color</th><th>Message</th>"
//     +"<tr><th>Yellow</th><th>Ready to move</th></tr>"
//     +"</Table>")
// }else if(trafficColor.toUpperCase() === "GREEN"){
//     document.write("<Table>"
//     +"<th>Signal Color</th><th>Message</th>"
//     +"<tr><th>Green</th><th>Move Now</th></tr>"
//     +"</Table>")
// }

// Task 4

// var carFuel = prompt("Enter the remaining fuel in car in litres");

// if(carFuel < 0.25){
//     document.write("Please refill the fuel in your car");
// }


//Task 5

//A

// var a =4;
// if(++a === 4){
//     alert("given condition for variable a is true")
// }

//B

// var b = 82;
// if(b++ === 83){
//     alert("given condition for varibale b is true")
// }

//C


// var c = 12;
// if(c++ === 13){
//     alert("condtion 1 is true");
// }
// if(c === 13){
//     alert("condition 2 is true");
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condtion 4 is true");
// }

//D

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if(totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// //E

// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }

// //F

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Task 6

// var mathsMarks = 70;
// var englishMarks = 80;
// var urduMarks = 71;
// var totalMarks = 300;
// var grade,remarks;
// var marksObtained = mathsMarks + englishMarks + urduMarks;
// var totalPercentage = (marksObtained / totalMarks) * 100;
// if (totalPercentage >= 80) {
//      grade = "A-one";
//      remarks = "Excellent";
// } else if (totalPercentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (totalPercentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else if (totalPercentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }


// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>");
// document.write("Total marks: " + totalMarks);
// document.write("<br>");
// document.write("Marks obtained: " + marksObtained);
// document.write("<br>");
// document.write("Percentage: " + totalPercentage);
// document.write("<br>");
// document.write("Grade: " + grade);
// document.write("<br>");
// document.write("Remarks: " + remarks);
// document.write("<br>");


// Task 7

// var secretNumber = 8;
// var guessNumber = +prompt("Guess a number");

// if(secretNumber === guessNumber){
//     document.write("Bingo! Correct answer");
// }
// if(++secretNumber === guessNumber){
//     document.write("Close enough to the correct answer");
// }


//Task 8

// var givenNumber = +prompt("Enter any number");
// if(givenNumber%3 == 0){
//     document.write("It is divisible by 3");
// }

//Task 9

// var anyNumber = +prompt("Enter any number");

// if(anyNumber%2 == 0){
//     document.write("Number is even");
// }else if(anyNumber%2 !== 0){
//     document.write("Number is odd");
// }

//Task 10

// var temperatureInput = +prompt("Enter the temperature");

// if(temperatureInput > 40){
//     document.write("It is too hot outside")
// }else if(temperatureInput > 30){
//     document.write("The weather today is normal");
// }else if(temperatureInput > 20){
//     document.write("Today's weather is cool");
// }else if(temperatureInput > 10){
//     document.write("OMG! Today's weather is so Cool");
// }

//Task 11

// var firstNumber = +prompt("Enter your first number");
// var secondNumber = +prompt("Enter your second number");
// var operation = prompt("Enter the operator");
// var result;

// switch(operation){
//     case "+":
//         result = firstNumber + secondNumber;
//         break;
//         case "-":
//         result = firstNumber - secondNumber;
//         break;
//         case "/":
//         result = firstNumber / secondNumber;
//         break;
//         case "*":
//         result = firstNumber * secondNumber;
//         break;
//         case "%":
//         result = firstNumber % secondNumber;
//         break;
//         default:
//             break;
// }
// console.log(operation);
// document.write("Answer: " + result)
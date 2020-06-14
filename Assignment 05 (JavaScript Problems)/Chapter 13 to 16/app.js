// Chap 14-16

// Task 1


// var studentNames = [];

// Task 2


// var studentNames2 = new Array();

// Task 3

// var stringArray = ["hello","bye"];

// Task 4

// var numberArray = [1,2,3];

// Task 5

// var booleanArray = [true,false];

// Task 6

// var mixedArray = ["hello",2,4,"bye",1];

// Task 7

// var degrees = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// console.log(degrees);
// document.write("<h1>Qualifications</h1>");
// document.write("<ol>"
// +degrees.map(degree=> {return("<li>"+degree+"</li>")})
// +"</ol>")


// Task 8

// var stundentNames = ["Abdul Rafay", "Huzaifa", "Harris"];
// var studentMarks = [400,412,433];
// var totalMarks = 500;

// for(var i=0; i< stundentNames.length; i++)
// {
// document.write("Score of " + stundentNames[i] + " is " + studentMarks[i] + ". Percentage: " + (studentMarks[i]/500)*100);
// document.write("<br>");
// }

// Task 9

// var colorNames = ["Red","Green","Yellow","Orange"];

// document.write(colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");

// // //A

// var userBeginningColor = prompt("What color you want to add to the beginning?");
// colorNames.unshift(userBeginningColor);

// document.write("Updated Array: " + colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");

// //B

// var userEndingColor = prompt("What color you want to add to the ending?");
// colorNames.push(userEndingColor);

// document.write("Updated Array: " + colorNames.map(name => name))
// document.write("<br>");


// //C

// var addMore1 = prompt("What color you want to add to the beginning?");
// var addMore2 = prompt("Again..what color you want to add to the beginning?");
// colorNames.unshift(addMore1);
// colorNames.unshift(addMore2);


// document.write("<br>");
// document.write("<br>");
// document.write("Updated Array: " + colorNames.map(name => name))
// document.write("<br>");

//D

// colorNames.shift();
// document.write("Delete First Color-- Updated Array " + colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");

// //E

// colorNames.pop();
// document.write("Delete Last Color-- Updated Array " + colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");


//F
// var colorAsk = prompt("What color you want to add");
// var indexAsk = prompt("At which index position you want to add " + colorAsk);

// var checkSplice = colorNames.splice(0,1,colorAsk);

// document.write("Updated Array " + colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");
// document.write("What's splice give: " + checkSplice);

//G

//  var deleteIndexAsk = prompt("At which index position you want to delete ");
//  var quantityIndexAsk = prompt("How many you want to delete");

// colorNames.splice(deleteIndexAsk,quantityIndexAsk)
// document.write("Updated Array " + colorNames.map(name => name))
// document.write("<br>");
// document.write("<br>");


//Task 10

// var studentScore = [320,230,489,123];

// document.write("<br>");
// document.write("Scores of Students: " + studentScore.map(score => score));
// var sorted = studentScore.sort();

// document.write("<br>");
// document.write("Ordered Scores of Students: " + sorted.map(score => score));


// Task 11

// var cityNames = ["Karachi","Lahore","Islamabad","Quetta",];

// document.write("Cities List: " + cityNames.map(city => city))

// var selectedCities = cityNames.slice(1);
// document.write("<br>");
// document.write("<br>");
// document.write("Selected cities List: " + selectedCities.map(city => city))


// Task 12

// var arr = ["This", "is", "my", "cat"];
// document.write("Array: " + arr);
// document.write("<br>");
// document.write("<br>");
// document.write("String: " + arr.join(" "));


// Task 13

// var devices = ["keyboard","mouse","printer","monitor"];

// document.write("Devices: " + devices);
// document.write("<br>");
// document.write("Out : " + devices.shift())
// document.write("<br>");
// document.write("Out : " + devices.shift())
// document.write("<br>");
// document.write("Out : " + devices.shift())
// document.write("<br>");
// document.write("Out : " + devices.shift())
// document.write("<br>");


// // Task 14


// var devices = ["keyboard","mouse","printer","monitor"];

// document.write("Devices: " + devices);
// document.write("<br>");
// document.write("Out : " + devices.pop())
// document.write("<br>");
// document.write("Out : " + devices.pop())
// document.write("<br>");
// document.write("Out : " + devices.pop())
// document.write("<br>");
// document.write("Out : " + devices.pop())
// document.write("<br>");


// Task 15

// var phoneManufacturers = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];

// document.write("<select>"
// +phoneManufacturers.map((phone, index) => {
//     return(
//         "<option value="+index+">" + phone + "</option>"
//     )
// })
// +"</select>")
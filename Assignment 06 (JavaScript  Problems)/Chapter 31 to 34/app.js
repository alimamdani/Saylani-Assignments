// Chapter 31-34


// Task 1 

// var date = new Date();
// document.write("Current Date and Time: " + date);

// Task 2

// var date = new Date();
// var monthArray =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write("Current Month: " + monthArray[date.getMonth()])

// Task 3

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var dayName = days[d.getDay()].split("d")[0];
// alert("Today is " + dayName);

// Task 4

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var dayName = days[d.getDay()];
// if(dayName == "Saturday" || dayName == "Sunday"){
//     document.write("It's fun day");
// }

// Task 5

// var date = new Date();
// console.log( date.getDate())
// if(date.getDate() <= 15){
//     document.write("First fifteen days of the month" + date.getDate());
// }else{
//     document.write("Last days of the month" +  date.getDate());
// }


// Task 6

// var currentDate = new Date();
// var elapsedSeconds = currentDate.getTime();

// document.write("Current Date and Time: " + currentDate);
// document.write("<br>")
// document.write("Elapsed minutes since Januarary 1, 1970: "+ currentDate.getTime() / 60000);
// document.write("<br>")
// document.write("Elapsed miliseconds since Januarary 1, 1970: "+ currentDate.getTime());

// Task 7

// var currentTime = new Date();

// if(currentTime.getHours() > 12){
//     alert("Its AM");
// }else{
//     alert("It's PM")
// }


// Task 8

// var date = new Date("December 31, 2020");
// var laterDate = date;
// document.write(laterDate);

// Task 9

// var ramadanDate = new Date("June 18, 2015");
// var currentDate = new Date();
// var msRamadan = ramadanDate.getTime();
// var msCurrent = currentDate.getTime();
// var msDiff =  msCurrent - msRamadan;
// var dDiff = msDiff/(1000* 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// document.write(dDiff); 

// Task 10

// var refDate = new Date("December 05, 2015");
// var begDate = new Date("Janurary 01, 2015");
// var msRef = refDate.getTime();
// var msBeg = begDate.getTime();
// var msDiff = msRef - msBeg;
// var dDiff = msDiff/(1000);
// dDiff = Math.floor(dDiff);
// document.write("On reference date " + refDate + " " + dDiff + " seconds had passed since beginning of 2015");

// Task 11

// var current = new Date();
// document.write("Current time, " + current )

// current.setHours(current.getHours() - 1)
// document.write("<br>")
// document.write("One hour ago: " + current);


// Task 12

// var current = new Date();
// document.write("Current date is: " + current);
// document.write("<br>");
// current.setFullYear(current.getFullYear() - 100)
// document.write("100 years back it was: " + current)

// Task 13

// var age = +prompt("What is your age");
// document.write("your age is: "+ age);
// var current = new Date();
// var currentYear = current.getFullYear();
// var diffYear = currentYear - age;
// document.write("Your birth year is: "+ diffYear)

// Task 14

// var current = new Date();
// var monthArray =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var numberPerUnit = 410;
// var chargesPerUnit = 16;
// var netAmount = numberPerUnit * chargesPerUnit;
// var latePayment = 350;
// var gross = netAmount + latePayment;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br>");
// document.write("Customer Name: Abdul Rafay Khan");
// document.write("<br>");
// document.write("Month: " + monthArray[current.getMonth()]);
// document.write("<br>");
// document.write("Number of Units: " + numberPerUnit);
// document.write("<br>");
// document.write("Charges per unit: " + chargesPerUnit);
// document.write("<br>");
// document.write("Net amount payable(With in due date): " + netAmount);
// document.write("<br>");
// document.write("Late payment surcharge: " + latePayment);
// document.write("<br>");
// document.write("Charges per unit: " + chargesPerUnit);
// document.write("<br>");
// document.write("Gross amount payable(after due date): " + gross);
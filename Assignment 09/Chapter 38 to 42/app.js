// Chapter 38 to 42
// // Task No 01
//         function powerOf(a , b){
//             var result = 1;
//             for(var i = 1; i <= b; i++ ){
//                 result = result * a;
//             }
//             return result;        
//         }
//     var a = +prompt("Enter the number");
//     var b = +prompt("Enter the power");
// document.write("Value is : " + a + " Power is : " + b + " Answer is : " + powerOf(a,b));

// Task No 02
    // var leapYear = +prompt("Enter year to know if it is leap year or not?")

    // if(leapYear%4 == 0) {
    //     document.write("Yes it's a leap year")
    // } else {
    //     document.write("No It's not a leap year")
    // }

// Task No 03
    // function ValueS(a,b,c) {
    //     var s;
    //     s = (a+b+c) / 2;
    //     return area (s,a,b,c);
    // }
    
    // function area (s,a,b,c) {
    //     var result;
    //     result = s*(s-a)*(s-b)*(s-c);
    //     return result; 
    // }
    // document.write("Area of a triangle is:" + ValueS(3 , 3 , 3))
// Task No 04
    // var totalMarks = 300;
    // var english = 75;
    // var maths = 70;
    // var urdu = 68;
    // mainFun();
    // function mainFun() {
    //     document.write("Average of this person is:" + average(english, maths, urdu));
    //     document.write("<br>")
    //     document.write("Percentage of this person is: " + percentage(english , maths , urdu));  
    // } 
    // function average(a , b , c) {
    //     return (a + b + c) / 3;
    // }

    // function percentage(val) {
    //     return(val / totalMarks) * 100;
    // }
// Task No 05

    // var string = "Welcome to my site";
    // var aarString = string.split(" ");

    // document.write(myIndexof("site"));

    // function myIndexof(val){
    //     for(var i = 0; i < aarString.length; i++) {
    //         if(aarString[i] === val) {
    //             return i;
    //         }
    //     }
    // }
    
// Task No 06

    // var mySentence = "Hello How are you bro i am fine and you";
    // deleteVowel(mySentence);

    // function deleteVowel(sentence) {
    //     var myLine = sentence.split("");
    //     var copyArr = [];
    //     for (var i = 0; i < myLine.length; i++) {
    //         if(!(myLine[i].toLocaleLowerCase() === "a" 
    //         || myLine[i].toLocaleLowerCase() === "e"
    //         || myLine[i].toLocaleLowerCase() === "i"
    //         || myLine[i].toLocaleLowerCase() === "o"
    //         || myLine[i].toLocaleLowerCase() === "u"

    //         )) {
    //             copyArr  +=myLine[i];
    //         }
    //     }
    //     document.write(copyArr);
    // }

// Task No 07
    // var mySentence = "Please read this application and give me gratuity";
    // countVowel(mySentence);

    // function countVowel(sentence) {
    //     var arrSentence = sentence.split("");
    //     var suchOccurence = "";
    //     var count = 0;

    //     for( var i = 0; i < arrSentence.length; i++) {
    //         switch (arrSentence[i]+ "" + arrSentence[ i + 1]) {
    //             case "ea": 
    //                 suchOccurence += " ea ";
    //                 count++;
    //                 break;
    //             case "ui": 
    //                 suchOccurence += " ui ";
    //                 count++;
    //                 break; 
    //         }

    //     }
    //     document.write("Such Occurence: " + suchOccurence + "and the count is: " + count)
    // }
// Task No 08

    // var distance = +prompt("Enter the distance between in two cities");

    // function kmIntoMeters(distance) {
    //     return distance * 1000;
    // }
    // function kmIntoFeet(distance) {
    //     return distance * 3280;
    // }
    // function kmIntoInches(distance) {
    //     return distance * 39370;
    // }
    // function kmIntoCenti(distance) {
    //     return distance * 100000;
    // }
    // document.write("Distance in Kilometers is: " + distance + "<br>");
    // document.write("Distance in Meters is: " + kmIntoMeters(distance) + "<br>");
    // document.write("Distance in Feet is: " + kmIntoFeet(distance) + "<br>");
    // document.write("Distance in Inches is: " + kmIntoInches(distance) + "<br>");
    // document.write("Distance in Centimeters is: " + kmIntoCenti(distance) + "<br>");
// Task No 09

    // var employees = [48,45,41];
    // var employeeName = ["Ali Raza" , "Ahsan" , "Kashan"];
    // var leftHour = 0;
    // var extraHour = 0;
    // for(var i = 0;  i < employees.length; i++ ) {
    //     if(employees[i] > 40) {
    //         leftHour = employees[i] - 40;
    //         extraHour = leftHour * 12;
    //         document.write("Employee " + i + "has worked " + employeeName[i] + " " + employees[i] + " hours and his extra hours salary is: " + extraHour + "<br>");
            
    //     } else {
    //         document.write("Employee " + i + "has worked " + employeeName[i] + " "  + employees[i] + "hours and he haven't dont any extra hours");
    //     }
    // } 

// Task No 10
    var amount = +prompt("Enter amount to withdraw");
    var hundred = fifty = ten = 0;

    while (amount > 0 ) {
        if(amount > 100 ){
            hundred++; 
            amount -= 100;
        }else if(amount < 100 && amount > 49) {
            fifty++;
            amount -= 50;
        }else if(amount < 49 && amount > 10) {
            ten++;
            amount -=10;
        }
    }
document.write("You will have " + hundred + "hundreds" + fifty + "fifty" + ten + "ten" + "ten Currenty Notes");
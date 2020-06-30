// Chapter 21 to 25

//     Task no 1
// var firstName = prompt("Enter your first name");
// var secondName = prompt("Enter your Second name")
// var fullName = firstName + " " + secondName;
// document.write(fullName);

    // Task No 2
// var mobileModel = prompt("Enter your favourite Mobile")
// var length = mobileModel.length;
// document.write("My Favourite Mobile is " + mobileModel + "<br>")
// document.write("String Length is " + length)

    // Task No 03
// var country = "Pakistan"
// var index = country.indexOf("n");
// document.write("Country Name is " + country + "<br>")
// document.write("Index of 'n' " + index )

    // Task No 4
// var a = "Hello World";
// var lastIndex = a.lastIndexOf("l")
// document.write("Example " + a + "<br>");
// document.write("last index of L : " + lastIndex);

    // Task No 5
// var country = "Pakistan";
// document.write("String: " + country + "<br>")
// var search = country.charAt(3);
// document.write("Character of index 3: " + search)

//     Task No 6
// var firstName = prompt("Enter your first name");
// var secondName = prompt("Enter your Second name")
// var fullName = firstName.concat( secondName);
// document.write(fullName);

    // Task No 7
// var city = "Hyderabad";
// document.write(city + "<br>");
// city = "Islmabad";
// document.write("After Replacement :" + city);

    // Task No 8
// var a = "Ali and Sami are best friends. They play cricket and football together";
// document.write(a + "<br>");
// var b = a.replace("and", " & ");
// document.write(b);

//     Task No 9
// var oldValue = "472";
// var oldValueType = typeof oldValue;

// document.write("Value: " + oldValue);
// document.write("<br>");
// document.write("Value Type: " + oldValueType);

// var newValue = +oldValue;
// var newValueType = typeof newValue;
// document.write("<br>");
// document.write("Value: " + newValue);
// document.write("<br>");
// document.write("Value Type: " + newValueType);


// Task 10

// var userInput = prompt("Enter anything");
// document.write("User Input: " + userInput);
// document.write("<br>");
// document.write("UPPERCASE: " + userInput.toUpperCase())

// Task 11

// var userInput = prompt("Enter anything");

// document.write("User Input: " + userInput);
// document.write("<br>");
// document.write("Title Case: " + userInput.split("").slice(0,1).join('').toUpperCase() + "" + userInput.split("").slice(1).join(""));

// Task 12

// var num = 35.36
// var numToStr = num.toString();
// document.write(numToStr.replace(".","") + "<br>")

// Task 13

// var userName = prompt("Enter username");
// for(var i=0; i<userName.split("").length; i++){
//     if(userName[i].charCodeAt(0) === 33 
//     || userName[i].charCodeAt(0) === 44 
//     || userName[i].charCodeAt(0) === 46 
//     || userName[i].charCodeAt(0) === 64 )
//     {
//         alert("Please enter a valid username");
//     }
// }


// Task 14

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userChoice = prompt("Welcome to ABC bakery, what do you want to order sir/ma'am?");
// var isAvailable = bakery.findIndex(item => item.toUpperCase() === userChoice.toUpperCase())

// if(isAvailable === -1)
//     document.write(userChoice + " is not available in the bakery");
//     else{
//         document.write(userChoice + " is available at index " + isAvailable + " in the bakery");
//     }

//Task 15

// var userPassword = prompt("Enter the password");

// var operatePassword = userPassword.split("");

// if(operatePassword.length < 6){
//    alert("Less than six characters");
// }
// if(operatePassword[0].charCodeAt(0) >= 48 && operatePassword[0].charCodeAt(0) <= 57 )
// {
//     alert("First word should not be a number");
// }


// Task 16

// var university = "University of Karachi";
// var arrUni = university.split("");

// for (var i = 0; i < arrUni.length - 1; i++) {
//     document.write(arrUni[i])
//     document.write("<br>")

// }

// Task 17

// var userInput = prompt("Enter any word");
// var checkInput = userInput.split("");
// for(var i=checkInput.length -1; i>=checkInput.length-1; i--){
//     document.write(checkInput[i])
// }


// Task 18

// var strMessage = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// var arrMessage = strMessage.split(" ");
// for(var i=0; i<arrMessage.length -1; i++){
//     if(arrMessage[i].toUpperCase() === "THE"){
//         count++;
//     }
// }
// document.write("There are " + count + " occurence of the word [THE]");

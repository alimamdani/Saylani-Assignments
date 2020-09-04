// Task No 01
// function message() {
//     alert("Hello Good Morning")
// }
// Task No 02
// function purchase() {
//     alert("Thanks for purchasing a phone from us")
// }

// Task No 03
// var studentArr = [['0' , 'Ali Raza' , '13'],
//     ['1' , 'Ahsan' , '11'],
//     ['2' , 'Kashan' , '11'],
//     ['3' , 'Shayan' , '11']
// ];
// renderTable();
// function renderTable() {
//     if(studentArr.length > 0 ) {
//         for (var i = 0; i < studentArr.length; i++)  {
//             document.getElementById('studentTable').innerHTML += 
//             "<table>" +
//             "<th>Index</th>" + 
//             "<th>Student Name</th>" + 
//             "<th>Class</th>" + 
//             "<th>Action</th>" + 
//             "<tr>" + 
//             "<td>" +
//             studentArr[i].join(",").split(",")[0]+
//             "</td>" +
//             "<td>" + 
//             studentArr[i].join(",").split(",")[1]+
//             "</td>" + 
//             "<td>" + 
//             studentArr[i].join(",").split(",")[2]+
//             "</td>"+
//             "<td>" + 
//             "<button onclick=deleteStudent(" + i + ")>Delete Student</button>" +
//             "</td>" + 
//             "</tr>" + 
//             "</table>"
//         }
//     }else {
//         document.getElementById("studentTable").innerHTML += "Empty Data"
//     }
// }

// function deleteStudent(indexValue) {
//     document.getElementById("studentTable").innerHTML = " ";
//     studentArr.splice(indexValue , 1)
//     renderTable()
// }

// Task No 04

// var treeImage = document.getElementById("treeimg");

// function mouseover() {
//     console.log(treeImage)
//     treeImage.src = "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg" 
// }

// function mouseout() {
//     console.log(treeImage)
//     treeImage.src = "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// }

// Task No 05

// var number = document.getElementById('count');
// var count = 0;
//     function increase() {
//         count++;
//         console.log(count)
//         number.innerText = count;
//     }
//     function decrease() {
//         count--
//         number.innerText = count;
//     }

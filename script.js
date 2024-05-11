let output = document.getElementById("output");
let output2 = document.getElementById("output2");

// Number data manipulations
// SYNTAX : data. function to manipulate data

// isNaN
// let isNumber = isNaN(2);
// output.innerText = isNumber;

// // parsing
// // parseInt
// let number = "2";

// output.innerText = parseInt(number);
// output.innerText = typeof number;

// // parseFloat
// let number2 = "2.344";

// output.innerText = parsefloat(number2);

// // toFixed
// number = 3.5678;
// output2.innerText = number.toFixed(2);

// // Math Object
// // Math.inbuiltfunction(number)
// output.innerText = Math.round(2.34);
// output.innerText = Math.floor(2.7);
// output.innerText = Math.ceil(2.7);
// output.innerText = Math.max(12, 24, 10);
// output.innerText = Math.abs(-5);
// output.innerText = Math.pow(5, 7);
// output.innerText = Math.sqrt(36);
// output.innerText = Math.random();

// Optional Maths
// output.innerText = Math.sin(20);

// STRING DATA MANIPULATIONS
// Escape Characters
// output.innerText = 'Hello world ,"';
// output.innerText = "Hello\tworld";
// output.innerText = "Hello\nworld";
// output.innerText =
//   "Hello,\t\t\t\tWelcome\n\tto\n\t\t\t\tJavascript\n\t\t\t\t\t\t\t\tCourse";
// output.innerText = "Hello,    Welcome\n to\n    Javascript\n          Course";
const string = "Dented Code";
output.innerText = string.length;

// Extracting String Characters
output.innerText = string.at(0);
// output.innerText = string.charAt(0); CharAt doesn't support -1 index
output.innerHTML = string.charCodeAt(3);
output.innerHTML = string[100];

// Extracting string parts
output.innerText = string.slice(0, 5);
output.innerText = string.substring(0, 5);
output.innerText = string.substr(0, 5);

// Converting to Upper Case and lower Case
output.innerText = string.toLowerCase();
output.innerText = string.toLocaleUpperCase();

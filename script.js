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
// const string = "Dented Code";
// output.innerText = string.length;

// // Extracting String Characters
// output.innerText = string.at(0);
// // output.innerText = string.charAt(0); CharAt doesn't support -1 index
// output.innerHTML = string.charCodeAt(3);
// output.innerHTML = string[100];

// // Extracting string parts
// output.innerText = string.slice(0, 5);
// output.innerText = string.substring(0, 5);
// output.innerText = string.substr(0, 5);

// // Converting to Upper Case and lower Case
// output.innerText = string.toLowerCase();
// output.innerText = string.toLocaleUpperCase();

// // Concatenation and trimming..........
// output.innerText = string.concat(" Academuy", "Academy");
// output.innerText = string.trim();
// output.innerText = string.trimStart();
// output.innerText = string.trimEnd();

// // Repeat and Replace
// output.innerText = string.repeat(3);
// output.innerText = string.replace("T", "Academy");
// output.innerText = string.replaceAll("e", "b");

// // converting string to array
// output.innerText = string.split("", 4);

// // String Search [Dented Code]
// output.innerText = string.indexOf("e");
// output.innerText = string.lastIndexOf("e");
// output.innerText = string.search("e");
// // output.innerText = string.match("regex"); For regular expressions only
// output.innerText = string.includes("ode");
// output.innerText = string.startsWith("den");
// output.innerText = string.endsWith("code");

// // ||||ARRAYS Data Man ipulations |||
// // const groceryList = ["milk", "chicken", "potato", "sugar"];
// output.innerText = groceryList.length;

// // Accessing the Array elements
// output.innerText = groceryList[2];
// output.innerText = groceryList.indexOf("milk");
// output.innerText = groceryList.lastIndexOf("milk");

// // Adding and removing element
// groceryList.push("salt");
// output.innerText = groceryList;

// groceryList.pop();
// output.innerText = groceryList;

// groceryList.unshift("Apple");
// output.innerText = groceryList;

// groceryList.shift("");
// output.innerText = groceryList;

// groceryList.splice(2, 0, "Watermelon");
// output.innerText = groceryList;

// // concat and splitting arrays
// const num1 = [1, 2, 3, 4, 5];
// const num2 = [6, 5, 6, 7, 8, 9];
// output.innerText = num1 + num2;
// output.innerText = num1.concat(num2);
// output.innerText = groceryList.join("|");
// output.innerText = groceryList.slice("0,3");

// // Sorting and reversing
// output.innerText = num1.sort();
// output.innerText = groceryList.reverse();

// Iterating over Arrays
const groceryList = ["milk", "chicken", "potato", "sugar"];
// groceryList.forEach((item) => {
//   console.log(item);
// });
const newArray = groceryList.map((item, i) => {
  return item, i;
});
output.innerText = newArray;

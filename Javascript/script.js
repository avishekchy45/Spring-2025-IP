// Basic output
console.log("Hello World!");
console.log("Welcome to JavaScript!");

// Different data types
console.log(25);        // Number
console.log("Hello");   // String
console.log(true);      // Boolean

// Modern way (let and const)
let studentName = "John";
let age = 20;
const schoolName = "My School";

console.log(studentName);
console.log(age);
console.log(schoolName);

// JavaScript
let title = document.getElementById("title");
let paragraph = document.querySelector(".description");
let button = document.querySelector("#myButton");

console.log(paragraph.innerHTML);

// Change text
// title.innerHTML = "New Title!";
// paragraph.innerHTML = "Updated paragraph!";

// Change styles
// title.style.color = "blue";
// title.style.fontSize = "30px";

// Event handling
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

// button.addEventListener("mouseover", function() {
//     alert("Button was clicked!");
// });

// Or shorter version
// button.onclick = function() {
//     title.innerHTML = "Button Clicked!";
//     title.style.color = "red";
// };

let colorBox = document.getElementById("colorBox");
let changeButton = document.getElementById("changeColor");

changeButton.onclick = function() {
    let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
};

// Function declaration
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Using the function
let greeting = greetUser("Bill Gates");
console.log(greeting);

// Function with button
function showMessage() {
    let userInput = prompt("What's your name?");
    alert("Nice to meet you, " + userInput + "!");
}

let greetButton = document.getElementById("greetUser");
greetButton.addEventListener("click", showMessage);

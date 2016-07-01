// Keywords

// var hello = "Hello, World!";   // Declare a variable and initialize it to a string
// function print(greeting) {     // Declare a function and initialize it to {...}
// 	console.log(greeting)
// };
// print(hello);

// function Dog() {
//     this.greeting = "Bark!"
//     this.speak = function() {     // Yes, there ARE two ways to use the function keyword.
// 	console.log(this.greeting)
//     };
// };
// var rex = new Dog()
// rex.speak()                       // God dog, Rex!

// Flow Control & Scope

// var i = 1;
// var fibonacci = [0, 1]
// for (let i = 1; i < 10; i++) {
//     console.log("Index " + i + ": " + fibonacci[i]);
//     fibonacci[i + 1] = fibonacci[i] + fibonacci[i - 1]
// };
// console.log("Value of i:" + i);

// DOM

// var heading = document.createElement('h1');
// heading.textContent = "Hello, World Wide Web!";
// document.body.appendChild(heading);

// var dataset = [5, 10, 15, 20, 25];
// d3.select("body")
//     .selectAll("p")
//     .data(dataset)
//     .enter()
//     .append('p')
//     .text(function(d) {return d;});

function display(d) {
    d3.select("body")
	.selectAll("p")
	.data(d)
	.enter()
	.append('p')
	.text(function(d) {return d.plot_type;});
};
d3.csv("/Volumes/public-data/training/team-data/plots.csv", display)

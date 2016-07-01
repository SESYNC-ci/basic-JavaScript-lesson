---
---

# One Hour with JavaScript

Instructor: Ian Carroll

- The *de facto* scripting language for the world wide web
- Object oriented, but without classes (no, really!) 
- Syntax reminiscent of Java (duh!) and C
- Variable types are determined automatically (phew!)

## Hello, World!

JavaScript interpreters are built into modern browsers, so there is nothing to install if you already have Chrome, IE, Safari, Firefox, etc ...

~~~
<!doctype html>
<html>
  <body>
	<script>
	  var hello = "Hello, World!";
	  console.log(hello)
	</script>
  <body>
</html>
~~~
{:.text-document}

Point your browser to `file:///%sandbox%/demo.html`. Find where this "console" resides by looking for "Developer" views on your browser.

## Modularization

Modularization is the process of breaking a project into components (the modules) that encapsulate a *mostly* indepdent process. Linkage between modules depends, more or less, on their capacity for taking input and returning output.

Our first modularization step is to get the JavaScript out of the HTML!

~~~
<!doctype html>
<html>
  <body>
	<script src="demo.js"></script>
  <body>
</html>
~~~
{:.text-document}

~~~
var hello = "Hello, World!";
console.log(hello)
~~~
{:.text-document}

[//]: # " TODO: Add headings on the div "

## Data Types

There are just a few data types in JavaScript -- they're listed below. The vast majority of variables you work with will be an "object" data type, which will consist of other "objects" as well as any of the remaining six "primitive" data types.

| Type      | Examples                                        |
|-----------+-------------------------------------------------|
| number    | `42`, `0.4`, `NaN`                              |
| string    | `"Hello, World!"`                               |
| boolean   | `true`, `false`                                 |
| object    | Constructors: `Array()`, `Date()`, `Function()` |
|           | Literals: `{key: value, ... }`                  |
| undefined | the value of un-initialized variables           |
| null      | deliberate non-value                            |
| symbol    |                                                 |

Try in your browser's JavaScript console.

~~~
console.log(1 + 1 == 2)
~~~
{:.input}

~~~
true
~~~
{:.output}

## Keywords

| Keyword                 | Explanation                                |
|-------------------------+--------------------------------------------|
| `var`                   | declare a new variable                     |
| `let`                   | like `var`, but with a restricted scope    |
| `function`, `return`    | decalre a variable that accepts arguments, |
|                         | and optionally returns a value             |
| `new`                   | create a new object                        |
| `this`                  | the object that "owns" a statement         |
| `for`, `which`, etc ... | begin flow control statements              |

~~~
var hello = "Hello, World!";   // Declare a variable and initialize it to a string
function print(greeting) {     // Declare a function and initialize it to {...}
	console.log(greeting)
};
print(hello);
~~~
{:.text-document}

## Properties and the `new` Keyword

An object has it's own properties that are accessed with a `.` between the object and property names. We've seen one so far -- the `log` property belonging to `console`.

~~~
var address = {"city": "Annapolis", "state": "MD"};
console.log(address.city);
~~~
{:.text-document}

The `new` keyword works together with constructors, which are functions that may use the keyword `this` to reference the  object being constructed.

~~~
function Dog() {
    this.greeting = "Bark!"       // "this" refers to a TBD object
    this.speak = function() {     // Yes, there ARE two ways to use the function keyword
	    console.log(this.greeting)
    };
};
var rex = new Dog();              // Instantiate an object of "class" Dog
rex.speak();                      // God dog, Rex!
~~~
{:.text-document}

## Flow Control & Scope

Flow control in JavaScript uses the same synctax as C (including the `switch` statement). The keyword `let` declares a variable with block, statement or expression level scope. In the code below, observe the result of changing `let` to `var`.

~~~
var i = 1;
var fibonacci = [0, 1]
for (let i = 1; i < 10; i++) {
    console.log("Index " + i + ": " + fibonacci[i]);
    fibonacci[i + 1] = fibonacci[i] + fibonacci[i - 1];
};
console.log("Value of i:" + i);
~~~
{:.text-document}

## Document Object Model (DOM)

You get a lot for free with JavaScript running in a browser. One freebie is the `document` object which allows your script to control the DOM -- an abstration (or model) of a web page.

~~~
var heading = document.createElement('h1');
heading.textContent = "Hello, World Wide Web!";
document.body.appendChild(heading);
~~~
{:.text-document}

The script doesn't change the source code for the web page -- the HTML on file in demo.html -- but it modifies the page elements by re-writing the HTML in memory.

## Interactive Vizualizations with D3.js -- err, with Plotly.js

Let's jump way ahead of ourselves. D3.js is a JavaScript library that excells at drawing scalar vector graphics (SVG), which are compositions of many shapes described by text. If you use D3.js in conjunction with a DOM, the user can interact with the drawing.

~~~
<head> // TODO: revisit this
  ...
  <script src="https://d3js.org/d3.v4.min.js" async></script>
</head>
~~~

- reading a library from https
- binding data to elements in the DOM
- reading data with d3.csv
- TODO: deal with Chrome cross origin request problem
- TODO: actually, this should be about Plotly.js

[//]: # " eat idea at http://mbostock.github.io/d3/talk/20111116/iris-splom.html "

[//]: # " https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript "

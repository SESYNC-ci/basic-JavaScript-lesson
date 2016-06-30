---
---

# One Hour with JavaScript

- The *de facto* scripting language for the world wide web
- Object-oriented, but without classes (really!) 
- Syntax reminiscent of Java (duh!) and C

## Hello, World!

JavaScript interpreters are built into modern browsers, so there is nothing to install if you already have Chrome, IE, Safari, Firefox, etc ...

~~~
<!doctype html>
<html>
  <body>
	<script type="text/javascript">
	var hello = "Hello, World!"
	console.log(hello)
	</script>
  <body>
</html>
~~~
{:.text-document}

## Modularization/Encapsulation

- seperate the html from the script
- methods

## Data Types

| Type      | Examples                                  |
|-----------+-------------------------------------------|
| Number    | 42, 0.4, NaN                              |
| String    | "Hello, World!"                           |
| Boolean   | true, false                               |
| Object    | Constructors: Array(), Date(), Function() |
|           | Literals: {"key": value, ... }            |
| undefined | the value of un-initialized variables     |
| null      | deliberate non-value                      |
| Symbol    |                                           |

Try in your browser JavaScript console.

~~~
console.log(1 + 1 == 2)
~~~
{:.input}

~~~
true
~~~
{:.output}

## Keywords

| Keyword  | Explanation                                      |
|----------+--------------------------------------------------|
| var      | declare a new variable                           |
| function | decalre a new ... what, object that is callable? |
| new      | create a new object                              |
| this     | the object that "owns" a statement               |
|          |                                                  |

## Interactive Vizualizations with D3.js


[//]: # " eat idea at http://mbostock.github.io/d3/talk/20111116/iris-splom.html "

[//]: # " https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript "

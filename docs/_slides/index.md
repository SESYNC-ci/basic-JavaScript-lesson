---
---

# One Hour with JavaScript

Instructor: Ian Carroll

What JavaScript is:

- The *de facto* scripting language for the world wide web
- Object oriented, but without classes (no, really!) 
- Reminiscent of Java (duh!) and C syntax
- Dynamically typed (phew!)

## Hello, World!

JavaScript interpreters are built into modern browsers, so there is nothing to install if you already have Chrome, IE, Safari, Firefox, etc. All you need to do is create a document the browser will recognize, i.e. create a webpage.

~~~
<!doctype html>
<html>
  <body>
    <script>
      var hello = "Hello, World!";
      console.log(hello);
    </script>
  </body>
</html>
~~~
{:.text-document title="index.html"}

Point your browser to `file:///%sandbox%/index.html`. Find where the JavaScript "console" resides by looking for "Developer" views on your browser.

## Modularization

Modularization is the process of breaking a project into components (the modules), each one encapsulating a *mostly* indepdent process. Communication between modules depends, more or less, on their capacity for taking input and returning output.

Our first modularization step is to get the JavaScript out of the HTML!

~~~
var hello = "Hello, World!";
console.log(hello);
~~~
{:.text-document title="hello-world.js"}

~~~
<!doctype html>
<html>
  <body>
    <script src="hello-world.js"></script>
  </body>
</html>
~~~
{:.text-document title="index.html"}

## Data Types

Although the type of data referenced by a variable is determined automatically (and can change), the type must still be recognizable.
There are just a few data types in JavaScript -- they're all listed below.
The vast majority of variables you work with will be of an "object" data type, which will consist of other objects as well as any of the remaining six "primitive" data types.

| Type      | Examples                                        |
|-----------+-------------------------------------------------|
| number    | `42`, `0.4`, `NaN`                              |
| string    | `"Hello, World!"`                               |
| boolean   | `true`, `false`                                 |
| object    | Constructors: `Array()`, `Date()`, `Function()` |
|           | Literals: `{key: value, ... }`                  |
| undefined | the value of un-initialized variables           |
| null      | deliberate non-value                            |
| symbol    | save this for your second hour with JS ...      |

Primitive data types behave quite naturally: you could guess many actions that are permitted on them. Try the following in your browser's JavaScript console.

~~~
console.log(1 + 1 == 2)
~~~
{:.input}

~~~
true
~~~
{:.output}

## Keywords

Certain keywords are reserved, which means they cannot be the name of a variable. The table below shows some of the most important keywords.

| Keyword              | Explanation                                                               |
|----------------------+---------------------------------------------------------------------------|
| `var`                | declare a new variable                                                    |
| `let`                | like `var`, but with a restricted scope                                   |
| `function`, `return` | declare a variable that accepts arguments, and optionally returns a value |
| `new`                | create a new object                                                       |
| `this`               | the object that "owns" a statement                                        |
| `for`, `which`, etc. | begin flow control statements                                             |

~~~
var hello = "Hello, World!";   // Declare a variable and initialize it to a string
function print(greeting) {     // Declare a function and initialize it to {...}
  console.log(greeting)
};
print(hello);
~~~
{:.text-document title="hello-world.js"}

## Properties and the `new` Keyword

An object has it's own properties that are accessed with a `.` between the object and property names. We've seen one so far -- the `log` property belonging to `console`. When creating an object from an object literal, i.e. using `{key: value, ...}`, each key becomes the name of an object's property.

~~~
var dog = {"name": "Rex", "greeting": "Bark!"};
console.log(dog.name);
~~~
{:.input}

The `new` keyword works together with constructors, which are functions that may use the keyword `this` to assign properties to the object being constructed. It is convention to capitalize the name of a constructor.

~~~
function Dog() {
    this.name = "Rex";             // "this" refers to a TBD object
    this.greeting = "Bark!";
    this.speak = function() {      // Yes, there ARE two ways to use the function keyword!
        console.log(this.greeting) // See the difference?
    };
};
var rex = new Dog();               // Instantiate an object of "class" Dog
rex.speak();                       // Good dog, Rex!
~~~
{:.text-document title="rex.js"}

**Exercise:** Modify your `index.html` file to use this script instead of `hello-world.js`.

## Flow Control & Scope

Flow control in JavaScript uses the same syntax as C (including the `switch` statement, but that's for another time). The `for` keyword indicates a code block that will be repeated until the second statement of the immediately following `(...; ...; ...)` phrase evaluates to `true`.

~~~
var fibonacci = [0, 1];           // Wait, what? This is just a shortcut for the Array() constructor.

for (var i = 1; i < 10; i++) {
    console.log("Index " + i + ": " + fibonacci[i]);
    fibonacci[i + 1] = fibonacci[i];
};
~~~
{:.input}

**Exercise:** Wait a minute, that's not right! Modify the for loop to get the Fibonacci sequence. It should go like this: 1, 1, 2, 3, 5, 8, 13, 21, ...

**Exercise:** The keyword `let` declares a variable with block, statement or expression level scope. Try replacing `var i` with `let i` and then logging the value of `i` after the `for` loop has run.

## Document Object Model (DOM)

You get a lot for free with JavaScript running in a browser. One freebie is the `document` object which allows your script to control the webpage using the DOM, an abstration (or model) of a webpage.

~~~
var heading = document.createElement('h1');
heading.textContent = "Hello, World Wide Web!";
document.body.appendChild(heading);
~~~
{:.text-document title="hello-web.js"}

The script doesn't change the source code for the webpage -- the HTML on file in `index.html` -- but it modifies the page elements by re-writing the browser's working version of the DOM that was initially described in the HTML file.

## Interactive Vizualizations with Plotly.js

Let's jump way ahead of ourselves. D3.js is a JavaScript library that draws scalable vector graphics (SVG), which are compositions of simple shapes or geometries, on a webpage. SVG graphics look great on a webpage and have the added benefit of being easilly manipulated -- they're part of the DOM! Each shape is an element, directly accessible from the `document` object. Plotly.js is a JavaScript library, built on top of d3.js, that adds high-level charting capabilities.

Remember, JavaScript is meant to be interpreted online, so you can "import" any library distributed online by pointing the script `src` attribute to an appropriate URL.

~~~
<!doctype html>
<html>
  <body>
    <div id="fig-1"></div>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="viz.js"></script>
  </body>
</html>
~~~
{:.text-document title="index.html"}

Aside from importing Plotly.js and d3.js, the webpage now includes a `div` element identified as `fig-1`. A `div` element is a division, or section, of an HTML document. The `id` attribute is special in that its value is assumed to be unique within all elements of a webpage. Initially, the `div` has no content; the following script will add all the SVG elements to create the figure.

~~~
data = [{
    x: [1, 2, 3, 4, 5, 6, 7],
    y: [1, 1, 2, 3, 5, 8, 13],
}];
layout = {
    title: "Fibonacci Sequence",
};

Plotly.plot("fig-1", data, layout)
~~~
{:.text-document title="viz.js"}

**Exercise:** Once you have a plot visible in your webpage, find the JavaScript console under the "Developer" view again and examine the page elements (or, on most browsers, simply right-click the figure and choose to inspect the element). What class has been assigned to the original `div` identified by `figure-1`. Can you find a new `div` that Plotly.js added to the DOM?

A data jedi wouldn't write data *directly into the script* as we just did. Data should be stored seperately, wich its location indicated by a URL. Among the general purpose data tools in the d3.js library are functions for reading many data formats. To take full advantage of accessing data *anywhere* a URL might point, our webpage needs to be served (i.e. the browser needs to access it using the Hyper-Text Transfer Potocol, or HTTP). A handy Python module is useful for testing:

~~~
cd %sandbox%
python -m SimpleHTTPServer 8000
~~~
{:.input}

Now point a browser to `http://localhost:8000` to verify the webserver is working.

We are going to plot real-time streamflow data aquired from a USGS web service. There are a few concepts to understand before we create the plot:

- Web service: a server that presents data in response to parameters supplied by the client in a HTTP request
- JavaScript Object Notation (JSON): a data format matching the "key: value" pattern of object literals
- callback function: packaged-up instructions for handling data once it has been aquired by an asynchronous process

~~~
function callback(response) {
    var pre = document.createElement("pre");
    pre.textContent = JSON.stringify(response, null, 4);
    document.body.appendChild(pre);
};

var url = "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=01646500&period=P7D&parameterCd=00060";
d3.json(url, callback)
~~~
{:.text-document title="json.js"}

The parameters embedded in the URL specify a data format, monitoring site, time period and observation variable. The callback function only evaluates after the function `d3.json` receives a response from `waterservices.usgs.gov`. This callback just prints a string representation of the JSON object retrieved.

To plot the data, we need to process the JSON object into `x` and `y` data arrays before calling `Plotly.plot`.

~~~
function processTimeSeries(timeSeries) {
    var ts = timeSeries.values[0].value;
    var data = {
        "type": "scatter",
        "x": ts.map(function (i) {return d3.isoParse(i.dateTime)}),
        "y": ts.map(function (i) {return i.value}),
    };
    var layout = {
        "title": timeSeries.sourceInfo.siteName,
        "yaxis": {"title": timeSeries.variable.variableName},
    };
    return {
        "data": [data],
        "layout": layout,
    }
};
function callback(response) {
    var timeSeries = response.value.timeSeries[0];
    var figure = processTimeSeries(timeSeries);
    Plotly.plot("fig-1", figure.data, figure.layout)
};
var url = "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=01646500&period=P7D&parameterCd=00060";
d3.json(url, callback);
~~~
{:.text-document title="json-viz.js"}

A primary reason to learn JavaScript is to produce *interactive* vizualizations on the web, so let's leap forward once more. First, add a "select" form to the webpage.

~~~
...
<body>
  <div>
    Station: <select id="menu"></select>
  </div>
...
~~~
{:.text-document title="index.html"}

Second, make the following changes to `json-viz.js`:

- Re-write the callback function so it will
  - parse multiple time-series
  - add `option` elements to the `select` element in the DOM
  - attach a "listener" to the select form that responds to changes
- Update the URL to obtain all active stations in the state of Maryland

~~~
function callback(response) {
    var timeSeries = response.value.timeSeries;
    var fig = timeSeries.map(processTimeSeries);
    var select = document.getElementById("menu");
    for (let i = 0; i < timeSeries.length; i++) {
        var option = document.createElement("option");
        option.text = fig[i].layout.title;
        option.value = i;
        select.appendChild(option)
    };
    select.addEventListener(
        "change",
        function() {Plotly.newPlot("fig-1", fig[select.value].data, fig[select.value].layout);},
        false
    );
    select.dispatchEvent(new Event("change"));
};
var url = "http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=md&period=P7D&parameterCd=00060&siteStatus=active";
~~~
{:.text-document title="json-viz.js"}

**Exercise:** Study the [USGS Water Serivces tool](http://waterservices.usgs.gov/rest/IV-Test-Tool.html) and plot data from a different location or of a different type.
